const getAreaService = (sequelize) => {
  const AreaService = sequelize.define(
    'areaServices',
    {},
    { timestamps: false }
  );

  AreaService.add = async (areaServiceData) => {
    let areaService = await AreaService.create(areaServiceData);
    return areaService;
  };
  return AreaService;
};
export default getAreaService;
