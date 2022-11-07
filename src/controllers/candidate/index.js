import { candidatesUseCases } from '../../use-cases';

import makeGetCandidateByProject from './get-candidates-by-project';
import makeGetAllCandidateByStudent from './get-candidates-by-student';
import makePutCandidate from './put-candidate';
import makePostCandidate from './post-candidate';

const { listCandidatesByProject, listCandidatesByStudent, updateCandidate, addCandidate } = candidatesUseCases;

const getAllCandidatesByStudent = makeGetAllCandidateByStudent({
  listCandidatesByStudent,
})
const getCandidateByProject = makeGetCandidateByProject({
  listCandidatesByProject,
});
const putCandidate = makePutCandidate({ updateCandidate });
const postCandidate = makePostCandidate({addCandidate });

export default {
  putCandidate,
  getCandidateByProject,
  getAllCandidatesByStudent,
  postCandidate,
};
