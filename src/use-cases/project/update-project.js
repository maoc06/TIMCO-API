import { makeProject } from '../../entities';

export default function makeUpdateProject({ projectDb }) {
  return async function updateProject({ projectData } = {}) {
    let project = await validate(projectData);
    return projectDb.updateById(project);
  };

  async function validate(projectData) {
    const { projectId } = projectData;
    if (!projectId) throw new Error('project id null');

    const project = makeProject(projectData);

    const existing = await projectDb.findById(projectId);
    if (!existing) {
      throw new RangeError(`project with id=${projectId} not found`);
    }

    return project;
  }
}
