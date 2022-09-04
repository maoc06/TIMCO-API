import logger from '../../utils/logger';

export default function makeGetAllCompanies({ listAllCompanies }) {
  return async function getAllCompanies(_) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const companies = await listAllCompanies();
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all companies',
          data: companies,
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
