export default function makeListAllProjects({
  projectDb,
  companyModel,
  studentModel,
  stateModel,
  skillModel,
}) {
  return async function listAllProjects() {
    const projects = await projectDb.findProjects({
      companyModel,
      studentModel,
      stateModel,
      skillModel,
    });
    return projects;
  };
}
