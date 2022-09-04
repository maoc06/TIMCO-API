export default function makeListUniversity({ universityDb }) {
  return async function listUniversity({ universityId } = {}) {
    if (!universityId) throw new Error('university id null');

    const existing = await universityDb.findById(universityId);
    if (!existing) {
      throw new Error(`University with id=${universityId} does not exist`);
    }

    return existing;
  };
}
