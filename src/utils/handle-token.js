import jwt from 'jsonwebtoken';

export default function makeHandleToken() {
  return function handleToken(data, privateKey, expiresIn = '10 days') {
    return jwt.sign({ data }, privateKey, {
      expiresIn,
    });
  };
}
