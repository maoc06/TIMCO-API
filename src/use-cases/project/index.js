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
  skillModel: Skill,
  skillProjectDb: SkillProject,
});

const listProjectReviewByProject = makeListProjectReviewByProject({
  projectDb: Project,
  projectReviewDb: ProjectReview,
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

export default {
  listAllProjects,
  listProject,
  listProjectReviewByProject,
  listProjectReviewByCompany,
  listProjectReviewByStudent,
  addProject,
  addProjectReview,
  updateProject,
};
