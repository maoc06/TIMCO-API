import { makeSkill } from '../../entities';

export default function makeUpdateSkill({ skillDb }) {
  return async function updateSkill({ skillData } = {}) {
    let skill = await validate(skillData);
    return skillDb.updateById(skill);
  };

  async function validate(skillData) {
    const { skillId } = skillData;
    if (!skillId) throw new Error('skill id null');

    const skill = makeSkill(skillData);

    const existing = await skillDb.findById(skillId);
    if (!existing) {
      throw new RangeError(`skill with id=${skillId} not found`);
    }

    return skill;
  }
}
