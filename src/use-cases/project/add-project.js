import { makeProject } from '../../entities';

export default function makeAddProject({ projectDb, skillProjectDb }) {
  return async function addProject(projectData) {
    const project = await validate(projectData);

    const newProject = await projectDb.add(project);
    await addSkillsToProject(projectData, newProject);

    return newProject;
  };

  async function validate(projectData) {
    const project = makeProject(projectData);
    return project;
  }

  async function addSkillsToProject(projectData, { projectId }) {
    let skillsProject = [];
    let { skills } = projectData;

    skills.forEach((skill) => {
      skillsProject.push({ skillId: skill, projectId });
    });

    return await skillProjectDb.add(skillsProject);
  }
}
