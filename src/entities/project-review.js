export default function buildMakeProjectReview() {
  return function makeProjectReview({ ...entity }) {
    const { projectId, rating, comment } = {
      ...entity,
    };

    if (!projectId)
      throw new Error('project review must have an associated project id');
    // if (!reviewByCompany)
    //   throw new Error('project review must have an associated company id');
    // if (!studentId)
    //   throw new Error('project review must have an associated student id');
    if (!rating) throw new Error('project review must have a rating value');
    if (!comment) throw new Error('project review must have a comment');

    const projectReview = Object.freeze({ ...entity });
    return projectReview;
  };
}
