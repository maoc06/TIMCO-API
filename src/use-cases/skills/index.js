import models from '../../data-access';
const { Skill, SkillService } = models;

import makeListAllSkills from './list-all-skills';
import makeListSkill from './list-skill';
import makeAddSkill from './add-skills';
import makeUpdateSkill from './update-skill';

const listAllSkills = makeListAllSkills({ skillDb: Skill });
const listSkill = makeListSkill({ skillDb: Skill });
const addSkill = makeAddSkill({ skillDb: Skill, skillServiceDb: SkillService });
const updateSkill = makeUpdateSkill({ skillDb: Skill });

export default {
  listAllSkills,
  listSkill,
  addSkill,
  updateSkill,
};
