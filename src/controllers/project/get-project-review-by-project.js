import logger from '../../utils/logger';

export default function makeGetProjectReviewByProject({
  listProjectReviewByProject,
}) {
  return async function getProjectReviewByProject(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { projectId } = httpRequest.params;
    try {
      const projectReviewsByProject = await listProjectReviewByProject({
        projectId,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve project reviews by project',
          data: projectReviewsByProject,
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
