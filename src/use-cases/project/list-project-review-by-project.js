export default function makeListProjectReviewByProject({
  projectReviewDb,
  projectDb,
}) {
  return async function listProjectReviewByProject({ projectId } = {}) {
    const projectReviewsByProject = await validate(projectId);
    return projectReviewsByProject;
  };

  async function validate(projectId) {
    if (!projectId) throw new Error('project id null');

    const existing = await projectDb.findById(projectId);
    if (!existing) {
      throw new RangeError(`project with id=${projectId} does not exist.`);
    }

    const projectReviews = projectReviewDb.findByProject(projectId, {
      projectModel: projectDb,
    });
    return projectReviews;
  }
}
