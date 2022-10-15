import logger from '../../utils/logger';

export default function makeGetActiveProjectsByCompany({ listActiveProjectsByCompany }) {
  return async function getActiveProjectsByCompany(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { companyId } = httpRequest.params;

      const projects = await listActiveProjectsByCompany({companyId});
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all active projects by company',
          data: projects,
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
