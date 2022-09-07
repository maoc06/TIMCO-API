export default function makeListArea({ areaDb }) {
  return async function listArea({ areaId } = {}) {
    if (!areaId) throw new Error('area id null');

    const existing = await areaDb.findById(areaId);
    if (!existing) {
      throw new Error(`area with id=${areaId} does not exist`);
    }

    return existing;
  };
}
