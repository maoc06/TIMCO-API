import logger from '../../utils/logger';

export default function makeGetAllCandidatesByProject({ listCandidatesByProject }) {
  return async function getAllCandidatesByProjects(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { projectId } = httpRequest.params;

      const candidates = await listCandidatesByProject({projectId});
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all candidates by project',
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
