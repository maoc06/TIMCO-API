import logger from '../../utils/logger';

export default function makeGetAllProjectsByStudent({ listCandidatesByProject }) {
  return async function getAllProjectsByStudent(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { projectId } = httpRequest.params;

      const projects = await listCandidatesByProject({projectId});
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all candidates by project',
          data: projects,
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
