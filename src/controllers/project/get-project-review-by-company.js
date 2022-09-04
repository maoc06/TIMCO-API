import logger from '../../utils/logger';

export default function makeGetProjectReviewByCompany({
  listProjectReviewByCompany,
}) {
  return async function getProjectReviewByCompany(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { companyId } = httpRequest.params;
    try {
      const projectReviewsByCompany = await listProjectReviewByCompany({
        companyId,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve project reviews by company',
          data: projectReviewsByCompany,
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
