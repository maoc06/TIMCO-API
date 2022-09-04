import logger from '../../utils/logger';

export default function makePutCompany({ updateCompany }) {
  return async function putCompany(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };
    const companyData = httpRequest.body;
    try {
      const company = await updateCompany({ companyData });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'company successfully update',
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
