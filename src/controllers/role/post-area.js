import logger from '../../utils/logger';

export default function makePostArea({ addArea }) {
  return async function postArea(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...areaInfo } = httpRequest.body;
      const area = await addArea({ ...areaInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'area successfully added',
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
