import logger from '../../utils/logger';

export default function makePutUniversity({ updateUniversity }) {
  return async function putUniversity(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const universityData = httpRequest.body;
    try {
      const university = await updateUniversity({ universityData });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'university successfully update',
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
