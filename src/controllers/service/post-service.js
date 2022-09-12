import logger from '../../utils/logger';

export default function makePostService({ addService }) {
  return async function postService(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...serviceInfo } = httpRequest.body;
      const service = await addService({ ...serviceInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'service successfully added',
          data: service,
        },
      };
    } catch (e) {
      console.log(e);
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
