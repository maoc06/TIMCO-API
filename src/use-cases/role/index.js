import models from '../../data-access';
const { Role } = models;

import makeListAllRoles from './list-all-roles';
import makeListRole from './list-role';
import makeAddRole from './add-role';
import makeUpdateRole from './update-role';

const listAllRoles = makeListAllRoles({ roleDb: Role });
const listRole = makeListRole({ roleDb: Role });
const addRole = makeAddRole({ roleDb: Role });
const updateRole = makeUpdateRole({ roleDb: Role });

export default {
  listAllRoles,
  listRole,
  addRole,
  updateRole,
};
