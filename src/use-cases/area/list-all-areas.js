export default function makeListAllAreas({ areaDb }) {
  return async function listAllAreas() {
    const areas = await areaDb.findAreas();
    return areas;
  };
}
