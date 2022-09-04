import logger from '../../utils/logger';

export default function makePutRole({ updateRole }) {
  return async function putRole(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const roleData = httpRequest.body;
    try {
      const role = await updateRole({ roleData });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'role successfully update',
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
