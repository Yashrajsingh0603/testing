import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <article>
      <p className="eyebrow"><span className="eyebrow-mark" /> FROM THE JOURNAL</p>
      <h1 className="post-title">{post.title}</h1>
      <time className="post-date" dateTime={post.date}>{post.date}</time>

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <Link href="/" className="back-link">
        ← Back to all posts
      </Link>
    </article>
  );
}