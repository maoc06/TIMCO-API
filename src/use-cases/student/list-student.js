export default function makeListStudent({
  studentDb,
  areaModel,
  universityModel,
}) {
  return async function listStudent({ studentId } = {}) {
    if (!studentId) throw new Error('student id null');

    const existing = await studentDb.findByIdCompose(studentId, {
      areaModel,
      universityModel,
    });
    if (!existing) {
      throw new Error(`student with id=${studentId} does not exist`);
    }

    return existing;
  };
}
