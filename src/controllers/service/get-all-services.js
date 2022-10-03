import logger from '../../utils/logger';

export default function makeGetAllServices({ listAllServices }) {
  return async function getAllServices(_) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const services = await listAllServices();
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all services',
          data: services,
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
