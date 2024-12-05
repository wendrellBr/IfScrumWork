import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPost, getRelatedPosts } from "@/lib/blog";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
  // In a real application, you would fetch this from your API or database
  return [
    { slug: "scrum-ceremonies-guide" },
    { slug: "agile-estimation-techniques" },
    { slug: "product-backlog-refinement" },
  ];
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await getBlogPost(params.slug);

    return {
      title: `${post.title} | SCRUM Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [post.featuredImage],
      },
    };
  } catch {
    return {
      title: "Post Not Found | SCRUM Blog",
      description: "The requested blog post could not be found.",
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post;
  try {
    post = await getBlogPost(params.slug);
  } catch {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(params.slug);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-1">
              <p className="text-muted-foreground">
                Published on {formatDate(post.publishedAt)}
              </p>
              <p className="text-sm text-muted-foreground">{post.readingTime}</p>
            </div>
            <ShareButtons
              url={`https://scrumblog.com/blog/${post.slug}`}
              title={post.title}
            />
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author */}
        <AuthorCard author={post.author} />

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </div>
    </article>
  );
}