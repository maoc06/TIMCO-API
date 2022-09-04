export default function makeListRole({ roleDb }) {
  return async function listRole({ roleId } = {}) {
    if (!roleId) throw new Error('role id null');

    const existing = await roleDb.findById(roleId);
    if (!existing) {
      throw new Error(`role with id=${roleId} does not exist`);
    }

    return existing;
  };
}
