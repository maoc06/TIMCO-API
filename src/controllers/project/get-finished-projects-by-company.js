import logger from '../../utils/logger';

export default function makeGetFinishedProjectsByCompany({ listFinishedProjectsByCompany }) {
  return async function getFinishedProjectsByCompany(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { companyId } = httpRequest.params;

      const projects = await listFinishedProjectsByCompany({companyId});
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all finished projects by company',
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
