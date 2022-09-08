export default function makeListAllServices({ serviceDb }) {
    return async function listAllServices() {
      const services = await serviceDb.findServices();
      return services;
    };
  }
  