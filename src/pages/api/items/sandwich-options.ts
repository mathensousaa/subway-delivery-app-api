import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const result = await query('SELECT * FROM SandwichOption');
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching sandwich options:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
