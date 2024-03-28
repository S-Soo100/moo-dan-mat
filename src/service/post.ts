import path from 'path';
import { promises as fs } from 'fs';

export type Post = {
  // 단백질 파우더
  image: string;
  name: string;
  brand: string;
  taste: string;
  nation: string;
  capacity: number;
  capacity_unit: string;
  price: string;
  one_time_capacity: number;
  one_time_ingredient: number;
  recommended_target: string;
  seller: string;
  seller_link: string;
  // 게시글
  id: string;
  photo: string;
  title: string;
  context: string;
  hashtag: string;
  published_at: string;
  writer: string;
  category: string;
  comment: string;
  good: number;
};

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'post.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}
