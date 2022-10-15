export default function makeListInProgressProjectsByCompany({
    projectModel,
    companyModel,
    studentModel,
    stateModel,
    skillModel,
  }) {
    return async function listInProgressProjectsByCompany({ companyId } = {}) {
      const company = await validateCompany(companyId);
      if (!company) {
        throw new RangeError(`company with id=${companyId} does not exist.`);
      }
  
      let projects = await projectModel.findInProgressByCompany(companyId, { companyModel, studentModel, stateModel, skillModel });
      return projects;
    };
  
    async function validateCompany(companyId) {
      if (!companyId) throw new Error('company id null');
  
      const existing = await companyModel.findById(companyId);
  
      return existing;
    }
  }