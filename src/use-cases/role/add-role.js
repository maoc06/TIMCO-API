import { makeRole } from '../../entities';

export default function makeAddRole({ roleDb }) {
  return async function addRole(roleData) {
    const role = await validate(roleData);
    return roleDb.add(role);
  };

  async function validate(roleData) {
    const role = makeRole(roleData);
    return role;
  }
}
