import BlogPost from "./components/BlogPost";
import { getPosts } from "./ghost/post";

export default async function Home() {
  const blogPosts = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Blog Posts</h1>
      {blogPosts.map((post) => {
        return (
          <BlogPost
            key={post.id}
            title={post.title}
            plainText={post.excerpt}
            excerpt={post.excerpt}
          />
        );
      })}
    </main>
  );
}
