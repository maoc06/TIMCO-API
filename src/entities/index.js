import buildMakeCompany from './company';
import buildMakeProject from './project';
import buildMakeProjectReview from './project-review';
import buildMakeRole from './role';
import buildMakeStudent from './student';
import buildMakeUniversity from './university';
import buildMakeSKill from './skill';

const makeCompany = buildMakeCompany();
const makeProject = buildMakeProject();
const makeProjectReview = buildMakeProjectReview();
const makeRole = buildMakeRole();
const makeStudent = buildMakeStudent();
const makeUniversity = buildMakeUniversity();
const makeSkill = buildMakeSKill();

export {
  makeCompany,
  makeProject,
  makeProjectReview,
  makeRole,
  makeStudent,
  makeUniversity,
  makeSkill,
};
