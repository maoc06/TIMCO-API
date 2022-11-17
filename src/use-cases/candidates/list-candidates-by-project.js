export default function makeListCandidatesByProject({
  candidatesDb,
  projectModel,
  studentModel,
  areaModel,
  universityModel,
}) {
  return async function listCandidatesByProject({ projectId } = {}) {
    const project = await validateProject(projectId);
    if (!project) {
      throw new RangeError(`project with id=${projectId} does not exist.`);
    }

    let candidates = await candidatesDb.findByProjectWaiting(projectId, { studentModel , areaModel, universityModel});
    return candidates;
  };

  async function validateProject(projectId) {
    if (!projectId) throw new Error('project id null');

    const existing = await projectModel.findById(projectId);
    return existing;
  }
}
