import logger from '../../utils/logger';

export default function makeGetService({ listService }) {
  return async function getService(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { serviceId } = httpRequest.params;
    try {
      const service = await listService({ serviceId });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve service',
          data: service,
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
