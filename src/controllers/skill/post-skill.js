import logger from '../../utils/logger';

export default function makePostSkill({ addSkill }) {
  return async function postSkill(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...skillInfo } = httpRequest.body;
      const skill = await addSkill({ ...skillInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'skill successfully added',
          data: skill,
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
