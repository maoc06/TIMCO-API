import models from '../../data-access';
const {
  Project,
  ProjectReview,
  Company,
  Student,
  State,
  Skill,
  SkillProject,
  Service,
  SkillService
} = models;

import makeListAllProjects from './list-all-projects';
import makeListProject from './list-project';
import makeListProjectReviewByProject from './list-project-review-by-project';
import makeListProjectReviewByCompany from './list-project-review-by-company';
import makeListProjectReviewByStudent from './list-project-review-by-student';
import makeAddProject from './add-project';
import makeAddProjectReview from './add-project-review';
import makeUpdateProject from './update-project';
import makeListProjectsByStudent from './list-student-projects';
import makeListActiveProjectsByCompany from './list-active-projects-by-company';
import makeListInProgressProjectsByCompany from './list-inProgress-projects-by-company';
import makeListFinishedProjectsByCompany from './list-finished-projects-by-company';
import makeListActiveProjectsByStudent from './list-active-projects-by-student';
import makeListInProgressProjectsByStudent from './list-inProgress-projects-by-student';
import makeListFinishedProjectsByStudent from './list-finished-projects-by-student';

const listAllProjects = makeListAllProjects({
  projectDb: Project,
  studentModel: Student,
  companyModel: Company,
  stateModel: State,
  skillModel: Skill,
});

const listProject = makeListProject({
  projectDb: Project,
  studentModel: Student,
  companyModel: Company,
  stateModel: State,
  skillInServiceModel: SkillService,
  skillProjectDb: SkillProject,
  serviceModel: Service,
});

const listProjectReviewByProject = makeListProjectReviewByProject({
  projectDb: Project,
  projectReviewDb: ProjectReview,
});
const addProject = makeAddProject({
  projectDb: Project,
  skillProjectDb: SkillProject,
});

const addProjectReview = makeAddProjectReview({
  projectDb: Project,
  projectReviewDb: ProjectReview,
});

const updateProject = makeUpdateProject({ projectDb: Project });

//By Student
const listProjectsByStudent = makeListProjectsByStudent({
  projectModel: Project,
  skillModel: Skill,
  studentDb: Student,
});

const listActiveProjectsByStudent = makeListActiveProjectsByStudent({
  projectModel: Project,
  companyModel: Company,
  skillModel: Skill,
  stateModel: State,
  studentModel: Student,
});
const listInProgressProjectsByStudent = makeListInProgressProjectsByStudent({
  projectModel: Project,
  companyModel: Company,
  skillModel: Skill,
  stateModel: State,
  studentModel: Student,
});

const listFinishedProjectsByStudent = makeListFinishedProjectsByStudent({
  projectModel: Project,
  companyModel: Company,
  skillModel: Skill,
  stateModel: State,
  studentModel: Student,
});

const listProjectReviewByStudent = makeListProjectReviewByStudent({
  projectReviewDb: ProjectReview,
  studentDb: Student,
  projectModel: Project,
});

//By Company-----------------
const listProjectReviewByCompany = makeListProjectReviewByCompany({
  projectReviewDb: ProjectReview,
  companyDb: Company,
  projectModel: Project,
});

const listActiveProjectsByCompany = makeListActiveProjectsByCompany({
  companyModel: Company,
  projectModel: Project,
  skillModel: Skill,
  stateModel: State,
  studentModel: Student,
});

const listInProgressProjectsByCompany = makeListInProgressProjectsByCompany({
  projectModel: Project,
  companyModel: Company,
  skillModel: Skill,
  stateModel: State,
  studentModel: Student,
});

const listFinishedProjectsByCompany = makeListFinishedProjectsByCompany({
  projectModel: Project,
  companyModel: Company,
  skillModel: Skill,
  stateModel: State,
  studentModel: Student,
});

export default {
  listActiveProjectsByStudent,
  listInProgressProjectsByStudent,
  listFinishedProjectsByStudent,
  listActiveProjectsByCompany,
  listInProgressProjectsByCompany,
  listFinishedProjectsByCompany,
  listAllProjects,
  listProject,
  listProjectsByStudent,
  listProjectReviewByProject,
  listProjectReviewByCompany,
  listProjectReviewByStudent,
  addProject,
  addProjectReview,
  updateProject,
};
