import { makeUniversity } from '../../entities';

export default function makeUpdateUniversity({ universityDb }) {
  return async function updateUniversity({ universityData } = {}) {
    let university = await validate(universityData);
    return universityDb.updateById(university);
  };

  async function validate(universityData) {
    const { universityId } = universityData;
    if (!universityId) throw new Error('university id null');

    const university = makeUniversity(universityData);

    const existing = await universityDb.findById(universityId);
    if (!existing) {
      throw new RangeError(`university with id=${universityId} not found`);
    }

    return university;
  }
}
