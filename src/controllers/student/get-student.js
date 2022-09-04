import logger from '../../utils/logger';

export default function makeGetStudent({ listStudent }) {
  return async function getStudent(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { studentId } = httpRequest.params;
    try {
      const student = await listStudent({ studentId });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve student',
          data: student,
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
