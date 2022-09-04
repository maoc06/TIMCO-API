import { makeCompany } from '../../entities';

export default function makeUpdateCompany({ companyDb }) {
  return async function updateCompany({ companyData } = {}) {
    let company = await validate(companyData);
    return companyDb.updateById(company);
  };

  async function validate(companyData) {
    const { companyId } = companyData;
    if (!companyId) throw new Error('company id null');

    const company = makeCompany(companyData);

    const existing = await companyDb.findById(companyId);
    if (!existing) {
      throw new RangeError(`Company with id=${companyId} not found`);
    }

    return company;
  }
}
