export default function buildMakeRole() {
  return function makeRole({ ...entity }) {
    const { name } = { ...entity };

    if (!name) throw new Error('role must have a name');

    const role = Object.freeze({ ...entity });
    return role;
  };
}
