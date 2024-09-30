import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import Gallery from "@/models/gallery";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Gallery[]>
) {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const perPage = req.query.perPage ? parseInt(req.query.perPage as string) : 10;
    const response = await axios.get<Gallery[]>(
      `https://avishkar.giantwheeltech.com/wp-json/wp/v2/gallery?page=${page}&per_page=${perPage}`
    );
    
    const galleries = response.data.map((gallery: Gallery) => ({
      id: gallery.id,
      slug: gallery.slug,
      title: gallery.title,
      images: gallery.acf.photo_gallery.photo_gallery,      
    }));

    res.status(200).json(galleries as unknown as Gallery[]);
  } catch (error) {
    console.error("Error fetching galleries:", error);
    res.status(500).json([]);
  }
}
