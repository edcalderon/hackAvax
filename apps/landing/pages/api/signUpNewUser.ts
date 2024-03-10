import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'
import dotenv from "dotenv";

//require('dotenv').config()

const API_ACCESS_TOKEN = process.env.NEXT_STRAPI_API_TOKEN
const PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newUserData = req.body;
    console.log(newUserData)

    const response = await axios.post(`${PUBLIC_API_URL}/auth/local/register`, {
      username: newUserData.email,
      email: newUserData.email,
      password: newUserData.password,
    });
    console.log('response', response.data);

    // Return success
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error creating the User:', error);
    res.status(200).json({ error: error });
  }
};