export default function makeListSkill({ skillDb }) {
  return async function listSkill({ skillId } = {}) {
    if (!skillId) throw new Error('skill id null');

    const existing = await skillDb.findById(skillId);
    if (!existing) {
      throw new Error(`skill with id=${skillId} does not exist`);
    }

    return existing;
  };
}
