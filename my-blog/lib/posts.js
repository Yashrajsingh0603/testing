import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(
      path.join(postsDirectory, fileName),
      "utf8"
    );
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: String(data.date || ""),
      excerpt: data.excerpt || "",
    };
  });

  // newest first
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPost(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title || slug,
    date: String(data.date || ""),
    excerpt: data.excerpt || "",
    contentHtml: processed.toString(),
  };
}