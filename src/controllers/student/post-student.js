import logger from '../../utils/logger';

export default function makePostStudent({ addStudent }) {
  return async function postStudent(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...studentInfo } = httpRequest.body;
      const student = await addStudent({ ...studentInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'student successfully added',
          data: student,
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
