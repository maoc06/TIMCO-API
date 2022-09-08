export default function makeListProject({
  projectDb,
  companyModel,
  studentModel,
  stateModel,
  skillModel,
  skillProjectDb,
}) {
  return async function listProject({ projectId } = {}) {
    if (!projectId) throw new Error('project id null');

    const existing = await projectDb.findByIdCompose(projectId, {
      companyModel,
      studentModel,
      stateModel,
      skillModel,
    });
    if (!existing) {
      throw new Error(`project with id=${projectId} does not exist`);
    }

    // let skills = await skillProjectDb.findByProject(projectId, {
    //   skillModel,
    // });

    // let createdProject = JSON.stringify(existing, null, 2);
    // createdProject = JSON.parse(createdProject);

    // skills = JSON.stringify(skills, null, 2);
    // createdProject.skills = JSON.parse(skills);

    return existing;
  };
}
