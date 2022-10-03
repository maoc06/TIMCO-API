export default function makeListService({ serviceDb, skillModel }) {
  return async function listService({ serviceId } = {}) {
    if (!serviceId) throw new Error('service id null');

    const existing = await serviceDb.findById(serviceId, { skillModel });
    if (!existing) {
      throw new Error(`service with id=${serviceId} does not exist`);
    }

    return existing;
  };
}
