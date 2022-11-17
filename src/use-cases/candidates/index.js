import models from '../../data-access';
const { Candidate, Company, Project, Student, State, Area, University } = models;

import makeListCandidatesByProject from './list-candidates-by-project';
import makeUpdateCandidate from './update-candidate';
import makeAddCandidate from './add-candidate';
import makeListCandidatesByStudent from './list-candidates-by-student';

const updateCandidate = makeUpdateCandidate({
  candidateDb: Candidate,
});
const listCandidatesByProject = makeListCandidatesByProject({
  candidatesDb: Candidate,
  projectModel: Project,
  studentModel: Student,
  areaModel: Area,
  universityModel: University,
});

const listCandidatesByStudent = makeListCandidatesByStudent({
  candidatesDb: Candidate,
  companyModel: Company,
  projectModel: Project,
  studentModel: Student,
  stateModel: State,
});

const addCandidate = makeAddCandidate({
  candidateDb: Candidate,
})

export default {
  updateCandidate,
  listCandidatesByProject,
  listCandidatesByStudent,
  addCandidate,
};
