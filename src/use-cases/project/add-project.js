import { makeProject } from '../../entities';

export default function makeAddProject({ projectDb, skillProjectDb }) {
  return async function addProject(projectData) {
    const project = await validate(projectData);

    const newProject = await projectDb.add(project);

    return newProject;
  };

  async function validate(projectData) {
    const project = makeProject(projectData);
    return project;
  }
}
