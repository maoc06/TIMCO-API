export default function makeListCompany({ companyDb }) {
  return async function listCompany({ companyId } = {}) {
    if (!companyId) throw new Error('company id null');

    const existing = await companyDb.findById(companyId);
    if (!existing) {
      throw new Error(`company with id=${companyId} does not exist`);
    }

    return existing;
  };
}
