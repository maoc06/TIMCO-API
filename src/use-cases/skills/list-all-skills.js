export default function makeListAllSkills({ skillDb }) {
  return async function listAllSkills() {
    const skills = await skillDb.findSkills();
    return skills;
  };
}
