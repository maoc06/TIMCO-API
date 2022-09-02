import { projectUseCases } from '../../use-cases';

import makeGetAllProjects from './get-all-projects';
import makeGetProject from './get-project';
import makePostProject from './post-project';
import makePutProject from './put-project';

const { addProject, listAllProjects, listProject, updateProject } =
  projectUseCases;

const getAllProjects = makeGetAllProjects({ listAllProjects });
const getProject = makeGetProject({ listProject });
const postProject = makePostProject({ addProject });
const putProject = makePutProject({ updateProject });

export default {
  getAllProjects,
  getProject,
  postProject,
  putProject,
};
