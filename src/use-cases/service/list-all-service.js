export default function makeListAllServices({ serviceDb, skillModel }) {
  return async function listAllServices() {
    const services = await serviceDb.findServices({ skillModel });
    return services;
  };
}
