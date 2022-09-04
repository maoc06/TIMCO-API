export default function makeListAllProjects({
  projectDb,
  companyModel,
  studentModel,
  stateModel,
}) {
  return async function listAllProjects() {
    const projects = await projectDb.findProjects({
      companyModel,
      studentModel,
      stateModel,
    });
    return projects;
  };
}
