import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Project } from "@/models/project";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const perPage = req.query.perPage ? parseInt(req.query.perPage as string) : 10;
    const responce = await axios(
      `https://avishkar.giantwheeltech.com/wp-json/wp/v2/project?page=${page}&per_page=${perPage}`
    );
    const projects = responce.data.map((project: any) => ({
      id: project.id,
      slug: project.slug,
      title: project.acf.title,
      summery: project.acf.summery,
      content: project.acf.content,
      address: project.acf.address,
      image: project.acf.image,
      gallery: project.acf.photo_gallery.gallery[0],
    }));
    res.status(200).json(projects);
  } catch (error) {
    res.status(500);
  }
}