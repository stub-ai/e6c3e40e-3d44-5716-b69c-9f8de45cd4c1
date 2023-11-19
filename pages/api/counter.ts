import type { NextApiRequest, NextApiResponse } from 'next'

let count = 0;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ count: number }>
) {
  res.status(200).json({ count });
}