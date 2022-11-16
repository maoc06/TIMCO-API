export default function makeListCandidatesByStudent({
    candidatesDb,
    companyModel,
    studentModel,
    projectModel,
    stateModel,
  }) {
    return async function listCandidatesByProject({ studentId } = {}) {
      const student = await validateProject(studentId);
      if (!student) {
        throw new RangeError(`student with id=${studentId} does not exist.`);
      }
  
      let candidates = await candidatesDb.findProjectWaitingByStudent(studentId, {projectModel, stateModel, companyModel});
      return candidates;
    };
  
    async function validateProject(studentId) {
      if (!studentId) throw new Error('student id null');
  
      const existing = await studentModel.findById(studentId);
      return existing;
    }
  }
  