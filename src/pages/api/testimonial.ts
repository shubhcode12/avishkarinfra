import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import Review from "@/models/reviews";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Review[]>
) {
  try {
    const responce = await axios(
      "https://avishkar.giantwheeltech.com/wp-json/wp/v2/review"
    );
    const reviews = responce.data.map((review: any) => ({
      title: review.acf.title,
      content: review.acf.content,
      rating: review.acf.rating,
      author: review.acf.author,
    }));
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500);
  }
}