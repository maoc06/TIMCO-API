import { universityUseCase } from '../../use-cases';

import makeGetAllUniversities from './get-all-universities';
import makeGetUniversity from './get-university';
import makePostUniversity from './post-university';
import makePutUniversity from './put-university';

const { addUniversity, listAllUniversities, listUniversity, updateUniversity } =
  universityUseCase;

const getAllUniversities = makeGetAllUniversities({ listAllUniversities });
const getUniversity = makeGetUniversity({ listUniversity });
const postUniversity = makePostUniversity({ addUniversity });
const putUniversity = makePutUniversity({ updateUniversity });

export default {
  getAllUniversities,
  getUniversity,
  postUniversity,
  putUniversity,
};
