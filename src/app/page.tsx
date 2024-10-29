import Link from "next/link";
import { mock } from "node:test";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/twcpyPdYEPxzDlDxJczlecbOyEK6dngXfB1YUowaWvRShIrm",
  "https://utfs.io/f/twcpyPdYEPxzGO5TiLVeLGHD8k5nXPo0fEFqUgJ26WIYbpQ9",
  "https://utfs.io/f/twcpyPdYEPxzFfeWp9AOQX2xKtei4Yuq13NbV9EgkIJphGTw",
  "https://utfs.io/f/d6b2db64-3984-413a-a63d-2fbc991cb4e2-f0ionm.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
      ))}
      {[...mockImages,...mockImages,...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} className="object-contain"/>
          </div>
      ))}
      </div>
    </main>
  );
}
