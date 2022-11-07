import logger from '../../utils/logger';

export default function makePutCandidate({ updateCandidate }) {
  return async function putCandidate(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const candidateData = httpRequest.body;
    try {
      await updateCandidate({ candidateData });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'candidate successfully update',
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
