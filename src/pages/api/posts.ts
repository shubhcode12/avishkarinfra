import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import {Post} from "@/models/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  try {
    // implement pagination
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const perPage = req.query.perPage ? parseInt(req.query.perPage as string) : 10;
    const response = await axios.get<Post[]>(
      `https://avishkar.giantwheeltech.com/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}`
    );
    const posts = response.data.map((post: any) => ({
        id: post.id,
        title: post.title.rendered,
        content: post.content.rendered,
        date: post.date,
        slug: post.slug,
        author: post.author, 
        categories: post.categories,
        excerpt: post.excerpt.rendered,       
        tags: post.tags,
        featured_media_src_url: post.featured_media_src_url,
        
    }));
    res.status(200).json(posts as Post[]);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json([]);
  }
}