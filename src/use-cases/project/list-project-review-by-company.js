export default function makeListProjectReviewByCompany({
  projectReviewDb,
  companyDb,
  projectModel,
}) {
  return async function listProjectReviewByCompany({ companyId } = {}) {
    const projectReviewsByCompany = await validate(companyId);
    return projectReviewsByCompany;
  };

  async function validate(companyId) {
    if (!companyId) throw new Error('company id null');

    const existing = await companyDb.findById(companyId);
    if (!existing) {
      throw new RangeError(`company with id=${companyId} does not exist.`);
    }

    const projectReviews = projectReviewDb.findByCompany(companyId, {
      projectModel,
    });
    return projectReviews;
  }
}
