export default function makeListActiveProjectsByCompany({
    projectModel,
    companyModel,
    studentModel,
    stateModel,
    skillModel,
  }) {
    return async function listActiveProjectsByCompany({ companyId } = {}) {
      const company = await validateCompany(companyId);
      if (!company) {
        throw new RangeError(`company with uuid=${companyId} does not exist.`);
      }
  
      let projects = await projectModel.findActiveByCompany(companyId, { companyModel, studentModel, stateModel, skillModel });
      return projects;
    };
  
    async function validateCompany(companyId) {
      if (!companyId) throw new Error('company id null');
  
      const existing = await companyModel.findById(companyId);
  
      return existing;
    }
  }