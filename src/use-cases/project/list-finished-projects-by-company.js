export default function makeListFinishedProjectsByCompany({
    projectModel,
    companyModel,
    studentModel,
    stateModel,
    skillModel,
  }) {
    return async function listFinishedProjectsByCompany({ companyId } = {}) {
      const company = await validateCompany(companyId);
      if (!company) {
        throw new RangeError(`company with id=${companyId} does not exist.`);
      }
  
      let projects = await projectModel.findFinishedByCompany(companyId, { companyModel, studentModel, stateModel, skillModel });
      return projects;
    };
  
    async function validateCompany(companyId) {
      if (!companyId) throw new Error('company id null');
  
      const existing = await companyModel.findById(companyId);
  
      return existing;
    }
  }