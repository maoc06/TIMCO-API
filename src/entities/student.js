export default function buildMakeStudent() {
  return function makeStudent({ ...entity }) {
    const {
      name,
      email,
      phone,
      universityId,
      career,
      currentSemester,
      aboutMe,
      profileImage,
      roleId,
    } = {
      ...entity,
    };

    if (!name) throw new Error('student must have a name');
    if (!email) throw new Error('student must have a email');
    if (!phone) throw new Error('student must have a phone');
    if (!universityId)
      throw new Error('student must have an associated university id');
    if (!career) throw new Error('student must have a career');
    if (!currentSemester)
      throw new Error('student must have a current semester assigned');
    if (!aboutMe) throw new Error('student must have a about me');
    if (!profileImage) throw new Error('student must have a profile image');
    if (!roleId) throw new Error('student must have an associated role id');

    const student = Object.freeze({ ...entity });
    return student;
  };
}
