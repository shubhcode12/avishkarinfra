import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Project ID is required" });
  }

  try {
    const response = await axios.get(
      `https://avishkar.giantwheeltech.com/wp-json/wp/v2/project/${id}`
    );

    const project = {
      id: response.data.id,
      slug: response.data.slug,
      title: response.data.acf.title,
      summery: response.data.acf.summery,
      content: response.data.acf.content,
      address: response.data.acf.address,
      image: response.data.acf.image,
      gallery: response.data.acf.photo_gallery?.gallery[0] || null,
      category: response.data.project_category,
      tags: response.data.project_tag,
    };

    res.status(200).json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ error: "Failed to fetch project details" });
  }
}