import { makeArea } from '../../entities';

export default function makeAddArea({ areaDb }) {
  return async function addArea(areaData) {
    const area = await validate(areaData);
    return areaDb.add(area);
  };

  async function validate(areaData) {
    const area = makeArea(areaData);
    return area;
  }
}
