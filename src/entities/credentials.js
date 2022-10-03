export default function buildMakeCredentials() {
  return function makeCredentials({ ...entity }) {
    const { email, password } = { ...entity };

    if (!email)
      throw new Error('authentication process requires a username/email');
    if (!password)
      throw new Error('authentication process requires a password');

    const credentials = Object.freeze({ ...entity });

    return credentials;
  };
}
