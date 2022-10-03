import { makeSkill } from '../../entities';

export default function makeAddSkill({ skillDb, skillServiceDb }) {
  return async function addSkill(skillData) {
    let skill = await validate(skillData);
    skill = await skillDb.add(skill);

    const { serviceId } = skillData;
    const { skillId } = skill;
    await addSkillToService({ serviceId, skillId });

    return skill;
  };

  async function validate(skillData) {
    const skill = makeSkill(skillData);
    return skill;
  }

  async function addSkillToService({ skillId, serviceId }) {
    return await skillServiceDb.add({ skillId, serviceId });
  }
}
