import logger from '../../utils/logger';

export default function makePostStudent({ addStudent }) {
  return async function postStudent(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const photo = httpRequest.file;
      const { ...studentInfo } = httpRequest.body;
      console.log('Trying add student....');
      const accessToken = await addStudent({ ...studentInfo, photo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'student successfully added',
          accessToken: accessToken,
        },
      };
    } catch (e) {
      logger.error(e.message);
      return {
        headers,
        statusCode: 400,
        body: {
          error: JSON.parse(e.message),
        },
      };
    }
  };
}
