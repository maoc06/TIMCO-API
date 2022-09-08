import logger from '../../utils/logger';

export default function makePutSkill({ updateSkill }) {
  return async function putSkill(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const skillData = httpRequest.body;
    try {
      await updateSkill({ skillData });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'skill successfully update',
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
