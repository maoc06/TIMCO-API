import logger from '../../utils/logger';

export default function makeGetAllProjects({ listAllProjects }) {
  return async function getAllProjects(_) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const projects = await listAllProjects();
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all projects',
          data: projects,
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
