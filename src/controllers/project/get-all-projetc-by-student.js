import logger from '../../utils/logger';

export default function makeGetAllProjectsByStudent({ listProjectsByStudent }) {
  return async function getAllProjectsByStudent(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { studentId } = httpRequest.params;

      const candidates = await listProjectsByStudent({ studentId });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve candidates by project',
          data: candidates,
        },
      };
    } catch (e) {
      console.log(e);
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
