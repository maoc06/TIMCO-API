import logger from '../../utils/logger';

export default function makeGetCompany({ listCompany }) {
  return async function getCompany(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { companyId } = httpRequest.params;
    try {
      const company = await listCompany({ companyId });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve company',
          data: company,
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
