import logger from '../../utils/logger';

export default function makePutStudent({ updateStudent }) {
  return async function putStudent(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const studentData = httpRequest.body;
    try {
      const student = await updateStudent({ studentData });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'student successfully update',
        },
      };
    } catch (e) {
      console.log('=>>>>', e);
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
