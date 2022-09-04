import logger from '../../utils/logger';

export default function makeGetAllRoles({ listAllRoles }) {
  return async function getAllRoles(_) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const roles = await listAllRoles();
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'retrieve all roles',
          data: roles,
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
