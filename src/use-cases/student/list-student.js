export default function makeListStudent({
  studentDb,
  roleModel,
  universityModel,
}) {
  return async function listStudent({ studentId } = {}) {
    if (!studentId) throw new Error('student id null');

    const existing = await studentDb.findByIdCompose(studentId, {
      roleModel,
      universityModel,
    });
    if (!existing) {
      throw new Error(`student with id=${studentId} does not exist`);
    }

    return existing;
  };
}
