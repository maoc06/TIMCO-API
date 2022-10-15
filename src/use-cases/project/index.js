import models from '../../data-access';
const { Project, ProjectReview, Company, Student, State, Skill, SkillProject } =
  models;

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

const listProjectsByStudent = makeListProjectsByStudent({
  projectModel: Project,
  skillModel: Skill,
  studentDb: Student,
});

const listProject = makeListProject({
  projectDb: Project,
  studentModel: Student,
  companyModel: Company,
  stateModel: State,
  skillModel: Skill,
  skillProjectDb: SkillProject,
});

const listProjectReviewByProject = makeListProjectReviewByProject({
  projectDb: Project,
  projectReviewDb: ProjectReview,
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

const listProjectReviewByCompany = makeListProjectReviewByCompany({
  projectReviewDb: ProjectReview,
  companyDb: Company,
  projectModel: Project,
});

const listProjectReviewByStudent = makeListProjectReviewByStudent({
  projectReviewDb: ProjectReview,
  studentDb: Student,
  projectModel: Project,
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

const listActiveProjectsByCompany = makeListActiveProjectsByCompany({
  companyModel: Company,
  projectModel: Project,
  skillModel: Skill,
  stateModel: State,
  studentModel: Student,
});

export default {
  listActiveProjectsByStudent,
  listInProgressProjectsByStudent,
  listFinishedProjectsByStudent,
  listAllProjects,
  listProject,
  listProjectsByStudent,
  listProjectReviewByProject,
  listProjectReviewByCompany,
  listProjectReviewByStudent,
  addProject,
  addProjectReview,
  updateProject,
  listActiveProjectsByCompany,
};
