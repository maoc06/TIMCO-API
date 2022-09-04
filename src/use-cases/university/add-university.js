import { makeUniversity } from '../../entities';

export default function makeAddUniversity({ universityDb }) {
  return async function addUniversity(universityData) {
    const university = await validate(universityData);
    return universityDb.add(university);
  };

  async function validate(universityData) {
    const university = makeUniversity(universityData);
    return university;
  }
}
