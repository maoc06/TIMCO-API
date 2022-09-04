import logger from '../../utils/logger';

export default function makePostProjectReview({ addProjectReview }) {
  return async function postProjectReview(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...projectReviewInfo } = httpRequest.body;
      const projectReview = await addProjectReview({ ...projectReviewInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'project review successfully added',
          data: projectReview,
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
