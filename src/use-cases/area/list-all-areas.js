export default function makeListAllAreas({ areaDb, serviceModel }) {
  return async function listAllAreas() {
    const areas = await areaDb.findAreas({ serviceModel });
    return areas;
  };
}
