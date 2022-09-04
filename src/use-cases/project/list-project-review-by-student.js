export default function makeListProjectReviewByStudent({
  projectReviewDb,
  studentDb,
  projectModel,
}) {
  return async function listProjectReviewByStudent({ studentId } = {}) {
    const projectReviewsByStudent = await validate(studentId);
    return projectReviewsByStudent;
  };

  async function validate(studentId) {
    if (!studentId) throw new Error('student id null');

    const existing = await studentDb.findById(studentId);
    if (!existing) {
      throw new RangeError(`student with uuid=${studentId} does not exist.`);
    }

    const projectReviews = projectReviewDb.findByStudent(studentId, {
      projectModel,
    });
    return projectReviews;
  }
}
