import logger from '../../utils/logger';

export default function makePostRole({ addRole }) {
  return async function postRole(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...roleInfo } = httpRequest.body;
      const role = await addRole({ ...roleInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'role successfully added',
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
