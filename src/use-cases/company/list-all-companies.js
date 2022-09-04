export default function makeListAllCompanies({ companyDb }) {
  return async function listAllCompanies() {
    const companies = await companyDb.findCompanies();
    return companies;
  };
}
