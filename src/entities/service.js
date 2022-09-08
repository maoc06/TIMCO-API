export default function buildMakeService() {
  return function makeService({ ...entity }) {
    const { areaId, name, price } = { ...entity };

    if (!name) throw new Error('service must have a name');
    if (!price) throw new Error('service must have a price');
    if (!areaId) throw new Error('service must have an associated area');

    const service = Object.freeze({ ...entity });
    return service;
  };
}
