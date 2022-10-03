import { projectUseCases } from '../../use-cases';

import makeGetAllProjects from './get-all-projects';
import makeGetProject from './get-project';
import makeGetProjectReviewByCompany from './get-project-review-by-company';
import makeGetProjectReviewByStudent from './get-project-review-by-student';
import makeGetProjectReviewByProject from './get-project-review-by-project';
import makeGetAllProjectsByStudent from './get-all-projetc-by-student';
import makeGetActiveProjectsByStudent from './get-active-projetcs-by-student';
import makePostProject from './post-project';
import makePostProjectReview from './post-project-review';
import makePutProject from './put-project';

const {
  addProject,
  addProjectReview,
  listAllProjects,
  listProject,
  listProjectReviewByCompany,
  listProjectReviewByStudent,
  listProjectReviewByProject,
  listProjectsByStudent,
  updateProject,
  listActiveProjectsByStudent
} = projectUseCases;

const getAllProjects = makeGetAllProjects({ listAllProjects });

const getProject = makeGetProject({ listProject });

const getAllProjectsByStudent = makeGetAllProjectsByStudent({ listProjectsByStudent });
const getActiveProjectsByStudent = makeGetActiveProjectsByStudent({ listActiveProjectsByStudent });

const getProjectReviewByCompany = makeGetProjectReviewByCompany({
  listProjectReviewByCompany,
});

const getProjectReviewByStudent = makeGetProjectReviewByStudent({
  listProjectReviewByStudent,
});

const getProjectReviewByProject = makeGetProjectReviewByProject({
  listProjectReviewByProject,
});

const postProject = makePostProject({ addProject });

const postProjectReview = makePostProjectReview({ addProjectReview });

const putProject = makePutProject({ updateProject });

export default {
  getAllProjects,
  getProject,
  getAllProjectsByStudent,
  getProjectReviewByCompany,
  getProjectReviewByStudent,
  getProjectReviewByProject,
  getActiveProjectsByStudent,
  postProject,
  postProjectReview,
  putProject,
};
