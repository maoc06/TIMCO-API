import logger from '../../utils/logger';

export default function makePutService({ updateService }) {
  return async function putService(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const serviceData = httpRequest.body;
    try {
      const service = await updateService({ serviceData });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'service successfully update',
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
