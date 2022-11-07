export default function buildMakeCandidate() {
  return function makeCandidate({ ...entity }) {
    const {  studentId, projectId, companyId, stateId } = {
      ...entity,
    };

    // if (!candidateId) throw new Error('candidate must have a id');
    // if (!studentId) throw new Error('candidate must have a student id associate');
    // if (!projectId) throw new Error('candidate must have a project id associate');
    // if (!companyId) throw new Error('candidate must have a company id associate');
    if (!stateId) throw new Error('candidate must have a state id associate');

    const candidate = Object.freeze({ ...entity });
    return candidate;
  };
}
