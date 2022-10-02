import { candidatesUseCases } from '../../use-cases';

import makeGetCandidateByProject from './get-candidates-by-project';

const {listCandidatesByProject
} = candidatesUseCases;

const getCandidateByProject = makeGetCandidateByProject({ listCandidatesByProject });


export default {
  getCandidateByProject
};
