import { skillseUseCases } from '../../use-cases';

import makeGetAllSkills from './get-all-skills';
import makeGetSkill from './get-skill';
import makePostSkill from './post-skill';
import makePutSkill from './put-skill';

const { addSkill, listAllSkills, listSkill, updateSkill } = skillseUseCases;

const getAllSkills = makeGetAllSkills({ listAllSkills });
const getSkill = makeGetSkill({ listSkill });
const postSkill = makePostSkill({ addSkill });
const putSkill = makePutSkill({ updateSkill });

export default {
  getAllSkills,
  getSkill,
  postSkill,
  putSkill,
};
