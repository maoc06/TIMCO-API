import logger from '../../utils/logger';

export default function makeGetProjectsVacancyAvailableByArea({
  listProjectsAvailableByArea,
}) {
  return async function getProjectsVacancyAvailableByArea(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { areaId } = httpRequest.params;

      const projects = await listProjectsAvailableByArea(areaId);
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all projects with available vacancy by area',
          data: projects,
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
