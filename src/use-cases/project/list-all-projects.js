export default function makeListAllProjects({ projectDb, stateModel }) {
  return async function listAllProjects() {
    const projects = await projectDb.findProjects(stateModel);
    return projects;
  };
}
