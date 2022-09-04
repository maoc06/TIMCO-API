import { roleUseCases } from '../../use-cases';

import makeGetAllRoles from './get-all-roles';
import makeGetRole from './get-role';
import makePostRole from './post-role';
import makePutRole from './put-role';

const { addRole, listAllRoles, listRole, updateRole } = roleUseCases;

const getAllRoles = makeGetAllRoles({ listAllRoles });
const getRole = makeGetRole({ listRole });
const postRole = makePostRole({ addRole });
const putRole = makePutRole({ updateRole });

export default {
  getAllRoles,
  getRole,
  postRole,
  putRole,
};
