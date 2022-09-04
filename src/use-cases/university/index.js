import models from '../../data-access';
const { University } = models;

import makeListAllUniversities from './list-all-university';
import makeListUniversity from './list-university';
import makeAddUniversity from './add-university';
import makeUpdateUniversity from './update-university';

const listAllUniversities = makeListAllUniversities({
  universityDb: University,
});
const listUniversity = makeListUniversity({ universityDb: University });
const addUniversity = makeAddUniversity({ universityDb: University });
const updateUniversity = makeUpdateUniversity({ universityDb: University });

export default {
  listAllUniversities,
  listUniversity,
  addUniversity,
  updateUniversity,
};
