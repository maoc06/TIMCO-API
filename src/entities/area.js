export default function buildMakeArea() {
  return function makeArea({ ...entity }) {
    const { name } = { ...entity };

    if (!name) throw new Error('role must have a name');

    const area = Object.freeze({ ...entity });
    return area;
  };
}
