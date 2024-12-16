import { BlogPostCard } from "@/components/blog-post";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Get unique categories
  const categories: string[] = posts.reduce((uniqueCategories: string[], post) => {
      if (!uniqueCategories.includes(post.metadata.category)) {
        uniqueCategories.push(post.metadata.category);
      }
      return uniqueCategories;
    }, []);

  return (
    <section>
      {
      categories.map(category => (
        <div className="w-full">
          <BlurFade delay={BLUR_FADE_DELAY} key={category}>
          <h1 className="font-medium text-2xl mb-1 tracking-tighter">{category}</h1>
          <ul className="mb-2 divide-y divide-dashed">
          {
          posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .filter((post) => post.metadata.category === category)
          .map((post, id) => (
            <Link
                  className="flex flex-col space-y-1 mb-1"
                  href={`/blog/${post.slug}`}
                >
              <BlogPostCard
                title={post.metadata.title}
                date={post.metadata.publishedAt}
                description={post.metadata.summary}
              />
              </Link>
            ))
          }
          </ul>
          </BlurFade>
        </div>
      ))
    }
    </section>
  )
}

