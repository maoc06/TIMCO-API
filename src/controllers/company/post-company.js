import logger from '../../utils/logger';

export default function makePostCompany({ addCompany }) {
  return async function postCompany(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const { ...companyInfo } = httpRequest.body;
      const company = await addCompany({ ...companyInfo });
      return {
        headers,
        statusCode: 201,
        body: {
          message: 'company successfully added',
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
