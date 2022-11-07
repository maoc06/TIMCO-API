import { makeCandidate } from '../../entities';

export default function makeAddCandidate({ candidateDb }) {
  return async function addCandidate(candidateData) {
    const candidate = await validate(candidateData);
    return candidateDb.add(candidate);
  };

  async function validate(candidateData) {
    const candidate = makeCandidate(candidateData);
    return candidate;
  }
}
