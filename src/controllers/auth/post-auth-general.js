import logger from '../../utils/logger';

export default function makePostAuthGeneral({ authGeneral }) {
  return async function postAuthGeneral(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const credentials = httpRequest.body;
      let access = await authGeneral(credentials);
      return {
        headers,
        statusCode: 201,
        body: {
          access,
        },
      };
    } catch (e) {
      console.log(e)
      logger.error(e.message);
      return {
        headers,
        statusCode: 400,
        body: {
          error: JSON.parse(e.message),
        },
      };
    }
  };
}
