import logger from '../../utils/logger';

export default function makePostCandidate({ addCandidate }) {
  return async function postCandidate(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...candidateInfo } = httpRequest.body;
      const candidate = await addCandidate({ ...candidateInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'candidate successfully added',
          data: candidate,
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
