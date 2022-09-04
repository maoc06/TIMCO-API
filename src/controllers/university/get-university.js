import logger from '../../utils/logger';

export default function makeGetUniversity({ listUniversity }) {
  return async function getUniversity(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { universityId } = httpRequest.params;
    try {
      const university = await listUniversity({ universityId });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve university',
          data: university,
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
