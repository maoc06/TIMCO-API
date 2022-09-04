export default function makeListAllUniversities({ universityDb }) {
  return async function listAllUniversities() {
    const university = await universityDb.findUniversities();
    return university;
  };
}
