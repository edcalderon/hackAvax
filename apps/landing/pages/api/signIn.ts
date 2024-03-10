import axios from 'axios';

const strapiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function signIn({ email, password }) {
  const res = await axios.post(`${strapiUrl}/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}