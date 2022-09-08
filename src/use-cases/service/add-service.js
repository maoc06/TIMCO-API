import { makeService } from '../../entities';

export default function makeAddService({ serviceDb }) {
  return async function addService(serviceData) {
    const service = await validate(serviceData);
    return serviceDb.add(service);
  };

  async function validate(serviceData) {
    const service = makeService(serviceData);
    return service;
  }
}