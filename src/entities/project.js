export default function buildMakeProject() {
  return function makeProject({ ...entity }) {
    const {
      companyId,
      serviceId,
      studentId,
      description,
      stateId,
      priceTotal,
      timelineDate,
    } = {
      ...entity,
    };

    if (!companyId)
      throw new Error('project must have an associated company id');
    if (!serviceId)
      throw new Error('project must have an associated service id');
    if (!studentId)
      throw new Error('project must have an associated student id');
    if (!stateId) throw new Error('project must have an associated status id');
    if (!description) throw new Error('project must have a description');
    if (!priceTotal) throw new Error('project must have a total price');
    if (!timelineDate) throw new Error('project must have a timeline date');

    const project = Object.freeze({ ...entity });
    return project;
  };
}
