import logger from '../../utils/logger';

export default function makeGetAllCandidateByStudent({ listCandidatesByStudent }) {
  return async function getAllCandidatesByStudent(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { studentId } = httpRequest.params;

      const candidates = await listCandidatesByStudent({studentId});
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all candidates by student',
          data: candidates,
        },
      };
    } catch (e) {
      console.log(e);
      logger.error(e.message);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
