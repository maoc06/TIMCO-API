import buildMakeCompany from './company';
import buildMakeProject from './project';
import buildMakeProjectReview from './project-review';
import buildMakeArea from './area';
import buildMakeStudent from './student';
import buildMakeUniversity from './university';
import buildMakeSKill from './skill';

const makeCompany = buildMakeCompany();
const makeProject = buildMakeProject();
const makeProjectReview = buildMakeProjectReview();
const makeArea = buildMakeArea();
const makeStudent = buildMakeStudent();
const makeUniversity = buildMakeUniversity();
const makeSkill = buildMakeSKill();

export {
  makeCompany,
  makeProject,
  makeProjectReview,
  makeArea,
  makeStudent,
  makeUniversity,
  makeSkill,
};
