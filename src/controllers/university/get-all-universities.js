import logger from '../../utils/logger';

export default function makeGetAllUniversities({ listAllUniversities }) {
  return async function getAllUniversities(_) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const universities = await listAllUniversities();
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all universities',
          data: universities,
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
