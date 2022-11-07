import logger from '../../utils/logger';

export default function makeGetInProgressProjectsByStudent({ listInProgressProjectsByStudent }) {
  return async function getInProgressProjectsByStudent(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { studentId } = httpRequest.params;

      const projects = await listInProgressProjectsByStudent({studentId});
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all In progress projects by student',
          data: projects,
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
