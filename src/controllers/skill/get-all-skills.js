import logger from '../../utils/logger';

export default function makeGetAllSkills({ listAllSkills }) {
  return async function getAllSkills(_) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const skills = await listAllSkills();
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all skills',
          data: skills,
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
