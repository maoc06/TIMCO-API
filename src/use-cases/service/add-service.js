import { makeService } from '../../entities';

export default function makeAddService({ serviceDb, areaServiceDb }) {
  return async function addService(serviceData) {
    let service = await validate(serviceData);
    service = await serviceDb.add(service);

    const { serviceId } = service;
    const { areaId } = serviceData;
    await addServiceToArea({ areaId, serviceId });

    return service;
  };

  async function validate(serviceData) {
    const service = makeService(serviceData);
    return service;
  }

  async function addServiceToArea({ areaId, serviceId }) {
    return await areaServiceDb.add({ areaId, serviceId });
  }
}
