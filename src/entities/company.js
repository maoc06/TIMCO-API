export default function buildMakeCompany() {
  return function makeCompany({ ...entity }) {
    const { name, email, phone, aboutMe, profileImage } = {
      ...entity,
    };

    if (!name) throw new Error('company must have a name');
    if (!email) throw new Error('company must have a email');
    // if (!phone) throw new Error('company must have a phone');
    // if (!aboutMe) throw new Error('company must have a aboutMe');
    // if (!profileImage) throw new Error('company must have a profile image');

    const company = Object.freeze({ ...entity });
    return company;
  };
}
