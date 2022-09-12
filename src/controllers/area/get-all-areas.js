import logger from '../../utils/logger';

export default function makeGetAllAreas({ listAllAreas }) {
  return async function getAllAreas(_) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const areas = await listAllAreas();
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all areas',
          data: areas,
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
