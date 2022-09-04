import logger from '../../utils/logger';

export default function makeGetAllStudents({ listAllStudents }) {
  return async function getAllStudents(_) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const students = await listAllStudents();
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all students',
          data: students,
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
