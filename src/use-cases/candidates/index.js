import models from '../../data-access';
const { Candidate, Project, Student, State } = models;

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
});

const listCandidatesByStudent = makeListCandidatesByStudent({
  candidatesDb: Candidate,
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
