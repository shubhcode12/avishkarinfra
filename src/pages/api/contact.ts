import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    return res.status(200).json({ message: "Message sent" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
