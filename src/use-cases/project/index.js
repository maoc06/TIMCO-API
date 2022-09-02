import models from '../../data-access';
const { Project, State } = models;

import makeListAllProjects from './list-all-projects';
import makeListProject from './list-project';
import makeAddProject from './add-project';
import makeUpdateProject from './update-project';

const listAllProjects = makeListAllProjects({
  projectDb: Project,
  stateModel: State,
});
const listProject = makeListProject({ projectDb: Project, stateModel: State });
const addProject = makeAddProject({ projectDb: Project });
const updateProject = makeUpdateProject({ projectDb: Project });

export default {
  listAllProjects,
  listProject,
  addProject,
  updateProject,
};
