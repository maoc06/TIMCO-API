import buildMakeCandidate from './candidate';
import buildMakeCompany from './company';
import buildMakeCredentials from './credentials';
import buildMakeProject from './project';
import buildMakeProjectReview from './project-review';
import buildMakeArea from './area';
import buildMakeStudent from './student';
import buildMakeService from './service';
import buildMakeUniversity from './university';
import buildMakeSKill from './skill';

const makeCandidate = buildMakeCandidate();
const makeCompany = buildMakeCompany();
const makeCredentials = buildMakeCredentials();
const makeProject = buildMakeProject();
const makeProjectReview = buildMakeProjectReview();
const makeArea = buildMakeArea();
const makeStudent = buildMakeStudent();
const makeService = buildMakeService();
const makeUniversity = buildMakeUniversity();
const makeSkill = buildMakeSKill();

export {
  makeCandidate,
  makeCompany,
  makeCredentials,
  makeProject,
  makeProjectReview,
  makeArea,
  makeStudent,
  makeService,
  makeUniversity,
  makeSkill,
};
