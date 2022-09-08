import logger from '../../utils/logger';

export default function makeGetArea({ listArea }) {
  return async function getArea(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { areaId } = httpRequest.params;
    try {
      const area = await listArea({ areaId });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve role',
          data: area,
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
