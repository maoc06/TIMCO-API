import { makeProjectReview } from '../../entities';

export default function makeAddProjectReview({ projectDb, projectReviewDb }) {
  return async function addProjectReview(projectReviewData) {
    const projectReview = await validate(projectReviewData);
    return projectReviewDb.add(projectReview);
  };

  async function validate(projectReviewData) {
    const { projectId } = projectReviewData;
    if (!projectId) throw new Error('project id null');

    const existing = await projectDb.findById(projectId);
    if (!existing) {
      throw new RangeError(
        `it is not possible to add a review, because the project with id=${projectId} does not exist.`
      );
    }

    const projectReview = makeProjectReview(projectReviewData);
    return projectReview;
  }
}
