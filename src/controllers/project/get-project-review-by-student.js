import logger from '../../utils/logger';

export default function makeGetProjectReviewByStudent({
  listProjectReviewByStudent,
}) {
  return async function getProjectReviewByStudent(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { studentId } = httpRequest.params;
    try {
      const projectReviewsByStudent = await listProjectReviewByStudent({
        studentId,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve project reviews by student',
          data: projectReviewsByStudent,
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
