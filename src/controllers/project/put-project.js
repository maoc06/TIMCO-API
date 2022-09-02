import logger from '../../utils/logger';

export default function makePutProject({ updateProject }) {
  return async function putProject(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const projectData = httpRequest.body;
    try {
      const project = await updateProject({ projectData });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'project successfully update',
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
