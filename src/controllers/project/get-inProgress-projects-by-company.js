import logger from '../../utils/logger';

export default function makeGetInProgressProjectsByCompany({ listInProgressProjectsByCompany }) {
  return async function getInProgressProjectsByCompany(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { companyId } = httpRequest.params;

      const projects = await listInProgressProjectsByCompany({companyId});
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all In progress projects by company',
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
