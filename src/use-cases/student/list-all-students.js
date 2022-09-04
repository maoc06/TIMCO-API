export default function makeListAllStudents({
  studentDb,
  roleModel,
  universityModel,
}) {
  return async function listAllStudents() {
    const students = await studentDb.findStudents({
      roleModel,
      universityModel,
    });
    return students;
  };
}
