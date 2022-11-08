import { projectUseCases } from '../../use-cases';

import makeGetAllProjects from './get-all-projects';
import makeGetProject from './get-project';
import makeGetProjectsVacancyAvailableByArea from './get-vacancy-available-by-area';
import makeGetProjectReviewByCompany from './get-project-review-by-company';
import makeGetProjectReviewByStudent from './get-project-review-by-student';
import makeGetProjectReviewByProject from './get-project-review-by-project';
import makeGetAllProjectsByStudent from './get-all-projetc-by-student';
import makeGetActiveProjectsByStudent from './get-active-projects-by-student';
import makeGetActiveProjectsByCompany from './get-active-projects-by-company';
import makeGetInProgressProjectsByStudent from './get-inProgress-projects-by-student';
import makeGetInProgressProjectsByCompany from './get-inProgress-projects-by-company';
import makeGetFinishedProjectsByCompany from './get-finished-projects-by-company';
import makeGetFinishedProjectsByStudent from './get-finished-projects-by-student';

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
  listActiveProjectsByStudent,
  listInProgressProjectsByStudent,
  listActiveProjectsByCompany,
  listInProgressProjectsByCompany,
  listFinishedProjectsByCompany,
  listFinishedProjectsByStudent,
  listProjectsAvailableByArea,
} = projectUseCases;

const getAllProjects = makeGetAllProjects({ listAllProjects });

const getProject = makeGetProject({ listProject });
const getProjectsVacancyAvailableByArea = makeGetProjectsVacancyAvailableByArea(
  { listProjectsAvailableByArea }
);

const getAllProjectsByStudent = makeGetAllProjectsByStudent({
  listProjectsByStudent,
});
const getActiveProjectsByStudent = makeGetActiveProjectsByStudent({
  listActiveProjectsByStudent,
});
const getActiveProjectsByCompany = makeGetActiveProjectsByCompany({
  listActiveProjectsByCompany,
});
const getInProgressProjectsByStudent = makeGetInProgressProjectsByStudent({
  listInProgressProjectsByStudent,
});
const getInProgressProjectsByCompany = makeGetInProgressProjectsByCompany({
  listInProgressProjectsByCompany,
});
const getFinishedProjectsByCompany = makeGetFinishedProjectsByCompany({
  listFinishedProjectsByCompany,
});
const getFinishedProjectsByStudent = makeGetFinishedProjectsByStudent({
  listFinishedProjectsByStudent,
});

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
  getProjectsVacancyAvailableByArea,
  getProjectReviewByCompany,
  getProjectReviewByStudent,
  getProjectReviewByProject,
  getActiveProjectsByCompany,
  getActiveProjectsByStudent,
  getInProgressProjectsByStudent,
  getInProgressProjectsByCompany,
  getFinishedProjectsByCompany,
  getFinishedProjectsByStudent,
  postProject,
  postProjectReview,
  putProject,
};
