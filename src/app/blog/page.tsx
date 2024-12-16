import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export  async function BlogPage(posts: { metadata: { [key: string]: any; }; slug: string; source: string; }[]) {
  return (
    <section>
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
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))
        }
        </section>
  );
}

export default async function TopicPage() {
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
        <BlurFade delay={BLUR_FADE_DELAY} key={category}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">{category}</h1>
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
            <div style={{ marginLeft: '10px' }}>
              <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
                <Link
                  className="flex flex-col space-y-1 mb-4"
                  href={`/blog/${post.slug}`}
                >
                  <div className="w-full flex flex-col">
                    <p className="tracking-tight">{post.metadata.title}</p>
                    <p className="h-6 text-xs text-muted-foreground">
                      {post.metadata.publishedAt}
                    </p>
                  </div>
                </Link>
              </BlurFade>
            </div>
          ))
        }
        </BlurFade>
      ))
    }
    </section>
  )
}
