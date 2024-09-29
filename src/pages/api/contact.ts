import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const BASE_URL = "https://avishkar.giantwheeltech.com/wp-json/wp/v2/submit-form";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message, phone } = req.body;
    try {
      const response = await axios.post(BASE_URL, {
        name,
        email,
        message,
        phone,
      });
      
      if (response.status === 200 && response.data.status === 'success') {
        return res.status(200).json({
          status: 'success',
          message: response.data.message,
          post_id: response.data.post_id
        });
      } else {
        return res.status(500).json({ status: 'error', message: "Failed to send message" });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      return res.status(500).json({ status: 'error', message: "An error occurred while sending the message" });
    }
  } else {
    return res.status(405).json({ status: 'error', message: "Method not allowed" });
  }
}
