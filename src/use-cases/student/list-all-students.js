export default function makeListAllStudents({
  studentDb,
  areaModel,
  universityModel,
}) {
  return async function listAllStudents() {
    const students = await studentDb.findStudents({
      areaModel,
      universityModel,
    });
    return students;
  };
}
