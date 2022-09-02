import logger from '../../utils/logger';

export default function makeGetProject({ listProject }) {
  return async function getProject(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { projectId } = httpRequest.params;
    try {
      const project = await listProject({ projectId });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve project',
          data: project,
        },
      };
    } catch (e) {
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
