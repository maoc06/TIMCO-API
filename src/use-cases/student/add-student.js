import bcrypt from 'bcryptjs';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { config } from '../../../config';
import { makeStudent } from '../../entities';

export default function makeAddStudent({ studentDb, filesDb, handleToken, areaModel, universityModel }) {
  return async function addStudent(studentData) {
    let studentTmp = await validate(studentData);
    let student = { ...studentTmp };

    if (student.password) {
      student.password = await cryptPassword(student.password);
    }

    student = await studentDb.add(student);
    //console.log(student);
    return generateAccesToken(student);
  };

  async function validate(studentData) {
   // console.log(studentData);
    const studentTmp = makeStudent(studentData);
    const student = { ...studentTmp };
    let photoUrl = config.user.defaultProfilePic;

    if (student.photo) {
      photoUrl = await processImage(student.photo);
    }

    student.profileImage = photoUrl;

    let isEmailExist = await studentDb.findByEmail(student.email,{areaModel,universityModel});
    if (isEmailExist) {
      throw new Error(
        JSON.stringify({
          status: 'error',
          message: 'create/email-student-exists',
        })
      );
    }

    // let isPhoneExist = await studentDb.findByPhone(student.phone);
    // if (isPhoneExist) {
    //   throw new Error(
    //     JSON.stringify({
    //       status: 'error',
    //       message: 'create/phone-student-exists',
    //     })
    //   );
    // }
    return student;
  }

  function generateAccesToken(student) {
    const data = {
      studentId: student.studentId,
      jobModality: student.jobModality,
      name: student.name,
      email: student.email,
      phone: student.phone,
      universityId: student.universityId,
      career: student.career,
      currentSemester: student.currentSemester,
      aboutMe: student.aboutMe,
      areaId: student.areaId,
      profileImage: student.profileImage,
      linkedinUrl: student.linkedinUrl,
      portfolioUrl: student.portfolioUrl,
    };

    return handleToken(data, config.privateKey);
  }

  async function processImage(file) {
    // Format the filename
    const timestamp = Date.now();
    const name = file.originalname.split('.')[0];
    const type = file.originalname.split('.')[1];
    const filename = `${name}_${timestamp}.${type}`;

    let imageRef = ref(filesDb, filename);
    const metatype = { contentType: file.mimetype, name: filename };
    await uploadBytes(imageRef, file.buffer, metatype);
    return await getDownloadURL(ref(filesDb, filename));
  }

  async function cryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
}
