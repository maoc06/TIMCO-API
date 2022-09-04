export default function buildMakeUniversity() {
  return function makeUniversity({ ...entity }) {
    const { name } = { ...entity };

    if (!name) throw new Error('university must have a name');

    const university = Object.freeze({ ...entity });
    return university;
  };
}
