import BlogPost from "@/app/components/BlogPost";
import { getPost } from "@/app/ghost/post";

export default async function Post({ params }) {
  const postSlug = params.postSlug;
  const post = await getPost(postSlug);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Post
      </h1>
      <BlogPost title={post.title} plainText={post.plaintext} />
    </main>
  );
}
