export default function buildMakeProject() {
  return function makeProject({ ...entity }) {
    const { description, stateId } = { ...entity };

    if (!description) throw new Error('project must have a description');
    if (!stateId) throw new Error('project must have an associated status id');

    const project = Object.freeze({ ...entity });
    return project;
  };
}
