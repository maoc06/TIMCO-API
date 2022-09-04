import logger from '../../utils/logger';

export default function makeGetRole({ listRole }) {
  return async function getRole(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { roleId } = httpRequest.params;
    try {
      const role = await listRole({ roleId });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve role',
          data: role,
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
