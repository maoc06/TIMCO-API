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
      console.log(e);
      logger.error(e.message);
      return {
        headers,
        statusCode: 400,
        body: {
          error: JSON.parse(e.message)
        },
      };
    }
  };
}
