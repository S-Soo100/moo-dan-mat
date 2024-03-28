//'use client';

import { getPosts } from '@/service/post';
import Link from 'next/link';

export default async function ReviewPost() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          {/* <Link href={`/reviews/${post.id}`}>{post.name}</Link> */}
          <p>{post.title}</p>
          <p>{post.writer}</p>
          <p>{post.published_at}</p>
        </li>
      ))}
    </ul>
  );
}
