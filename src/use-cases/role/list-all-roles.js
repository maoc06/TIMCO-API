export default function makeListAllRoles({ roleDb }) {
  return async function listAllRoles() {
    const roles = await roleDb.findRoles();
    return roles;
  };
}
