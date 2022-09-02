import logger from '../../utils/logger';

export default function makePostProject({ addProject }) {
  return async function postProject(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...projectInfo } = httpRequest.body;
      const project = await addProject({ ...projectInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'project successfully added',
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
