import { makeArea } from '../../entities';

export default function makeUpdateArea({ areaDb }) {
  return async function updateArea({ areaData } = {}) {
    let area = await validate(areaData);
    return areaDb.updateById(area);
  };

  async function validate(areaData) {
    const { areaId } = areaData;
    if (!areaId) throw new Error('area id null');

    const area = makeArea(areaData);

    const existing = await areaDb.findById(areaId);
    if (!existing) {
      throw new RangeError(`Area with id=${areaId} not found`);
    }

    return area;
  }
}
