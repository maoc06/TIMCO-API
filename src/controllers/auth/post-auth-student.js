import logger from '../../utils/logger';

export default function makePostAuthStudent({ authStudent }) {
  return async function postAuthStudent(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const credentials = httpRequest.body;
      let access = await authStudent(credentials);
      return {
        headers,
        statusCode: 200,
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
