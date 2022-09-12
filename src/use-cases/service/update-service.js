import { makeService } from '../../entities';

export default function makeUpdateService({ serviceDb }) {
  return async function updateService({ serviceData } = {}) {
    let service = await validate(serviceData);
    return serviceDb.updateById(service);
  };

  async function validate(serviceData) {
    const { serviceId } = serviceData;
    if (!serviceId) throw new Error('service id null');

    const service = makeService(serviceData);

    const existing = await serviceDb.findById(serviceId);
    if (!existing) {
      throw new RangeError(`Service with id=${serviceId} not found`);
    }

    return service;
  }
}