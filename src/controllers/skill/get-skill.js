import logger from '../../utils/logger';

export default function makeGetSkill({ listSkill }) {
  return async function getSkill(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { skillId } = httpRequest.params;
    try {
      const skill = await listSkill({ skillId });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve skill',
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
