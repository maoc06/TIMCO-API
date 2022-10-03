export default function buildMakeSKill() {
  return function makeSkill({ ...entity }) {
    const { name, serviceId } = { ...entity };

    if (!name) throw new Error('skill must have a name');
    if (!serviceId)
      throw new Error('the skill must have an associated service');

    const skill = Object.freeze({ ...entity });
    return skill;
  };
}
