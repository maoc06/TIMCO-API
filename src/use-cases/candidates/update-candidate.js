import { makeCandidate } from '../../entities';

export default function makeUpdateCandidate({ candidateDb }) {
  return async function updateCandidate({ candidateData } = {}) {
    let candidate = await validate(candidateData);
    // return {}
    return candidateDb.updateById(candidate);
  };

  async function validate(candidateData) {
    const { candidateId } = candidateData;
    if (!candidateId) throw new Error('candidate id null');

    const candidate = makeCandidate(candidateData);

    const existing = await candidateDb.findById(candidateId);
    if (!existing) {
      throw new RangeError(`Candidate with id=${candidateId} not found`);
    }

    return candidate;
  }
}
