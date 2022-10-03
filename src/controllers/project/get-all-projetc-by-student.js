import logger from '../../utils/logger';

export default function makeGetCandidateByProject({ listProjectsByStudent }) {
  return async function getCandidateByProject(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { projectId } = httpRequest.params;

      const candidates = await listProjectsByStudent({projectId});
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve candidates by project',
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
