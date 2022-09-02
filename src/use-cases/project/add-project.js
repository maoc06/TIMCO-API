import { makeProject } from '../../entities';

export default function makeAddProject({ projectDb }) {
  return async function addProject(projectData) {
    const project = await validate(projectData);
    return projectDb.add(project);
  };

  async function validate(projectData) {
    const project = makeProject(projectData);
    return project;
  }
}
