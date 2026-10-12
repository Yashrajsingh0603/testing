import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function Home() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const archivePosts = featuredPost ? posts.slice(1) : posts;

  return (
    <div className="home-page">
      <section className="home-intro" aria-labelledby="home-title">
        <p className="eyebrow"><span className="eyebrow-mark" /> A PERSONAL JOURNAL ABOUT THE INTERNET</p>
        <h1 id="home-title" className="page-title">
          Curious about how the web is <em>made.</em>
        </h1>
        <p className="intro-copy">
          Notes on building for the web, learning in public, and the small
          details that make the digital world feel human.
        </p>
        <Link className="text-link" href="#journal">Explore the journal <span aria-hidden="true">↓</span></Link>
      </section>

      {featuredPost && (
        <section className="featured-story" aria-label="Featured post">
          <Link href={`/blog/${featuredPost.slug}/`} className="featured-image-link" tabIndex={-1} aria-hidden="true">
            <Image
              src="/writing-desk.jpg"
              alt="A bright workspace with a laptop open to a code editor"
              className="featured-image"
              width={1400}
              height={933}
              priority
            />
          </Link>
          <div className="featured-copy">
            <p className="eyebrow">LATEST NOTE <span className="eyebrow-rule" /></p>
            <p className="featured-date">{formatDate(featuredPost.date)}</p>
            <h2><Link href={`/blog/${featuredPost.slug}/`}>{featuredPost.title}</Link></h2>
            <p className="featured-excerpt">{featuredPost.excerpt}</p>
            <Link href={`/blog/${featuredPost.slug}/`} className="read-link">Read the story <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      )}

      <section className="journal" id="journal" aria-labelledby="journal-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE ARCHIVE</p>
            <h2 id="journal-title">All notes</h2>
          </div>
          <span className="post-count">{String(archivePosts.length).padStart(2, "0")} ENTRIES</span>
        </div>

        <div className="post-list">
          {archivePosts.map((post, index) => (
            <article key={post.slug} className="post-row">
              <span className="post-index">{String(index + 1).padStart(2, "0")}</span>
              <time className="post-date" dateTime={post.date}>{formatDate(post.date)}</time>
              <div className="post-summary">
                <h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3>
                <p>{post.excerpt}</p>
              </div>
              <Link className="post-arrow" href={`/blog/${post.slug}/`} aria-label={`Read ${post.title}`}>
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}