import { makeRole } from '../../entities';

export default function makeUpdateRole({ roleDb }) {
  return async function updateRole({ roleData } = {}) {
    let role = await validate(roleData);
    return roleDb.updateById(role);
  };

  async function validate(roleData) {
    const { roleId } = roleData;
    if (!roleId) throw new Error('role id null');

    const role = makeRole(roleData);

    const existing = await roleDb.findById(roleId);
    if (!existing) {
      throw new RangeError(`Role with id=${roleId} not found`);
    }

    return role;
  }
}
