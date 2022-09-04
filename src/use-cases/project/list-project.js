export default function makeListProject({
  projectDb,
  companyModel,
  studentModel,
  stateModel,
}) {
  return async function listProject({ projectId } = {}) {
    if (!projectId) throw new Error('project id null');

    const existing = await projectDb.findByIdCompose(projectId, {
      companyModel,
      studentModel,
      stateModel,
    });
    if (!existing) {
      throw new Error(`project with id=${projectId} does not exist`);
    }

    return existing;
  };
}
