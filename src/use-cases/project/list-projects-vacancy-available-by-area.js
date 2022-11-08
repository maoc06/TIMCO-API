export default function makeListProjectsAvailableByArea({
  projectDb,
  companyModel,
}) {
  return async function listProjectsAvailableByArea(areaId) {
    if (!areaId) throw new Error('area id null');
    const projects = await projectDb.findUnassignedByArea(areaId, {
      companyModel,
    });
    return projects;
  };
}
