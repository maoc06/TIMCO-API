import logger from '../../utils/logger';

export default function makePostUniversity({ addUniversity }) {
  return async function postUniversity(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...universityInfo } = httpRequest.body;
      const university = await addUniversity({ ...universityInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'university successfully added',
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
