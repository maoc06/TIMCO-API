import logger from '../../utils/logger';

export default function makePutArea({ updateArea }) {
  return async function putArea(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const areaData = httpRequest.body;
    try {
      const area = await updateArea({ areaData });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'area successfully update',
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
