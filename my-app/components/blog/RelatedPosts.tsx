import type { RelatedPost } from "@/types/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface RelatedPostsProps {
	posts: RelatedPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
	return (
		<section className="not-prose">
			<h2 className="text-2xl font-bold mb-6">Outros artigos</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{posts.map((post) => (
					<Link key={post.id} href={`/blog/${post.slug}`}>
						<Card className="h-full hover:shadow-lg transition-shadow">
							<div className="relative h-48">
								<Image
									src={post.featuredImage}
									alt={post.title}
									fill
									className="object-cover rounded-t-lg"
								/>
							</div>
							<CardHeader>
								<CardTitle className="line-clamp-2">{post.title}</CardTitle>
								<p className="text-sm text-muted-foreground">
									{formatDate(post.publishedAt)}
								</p>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground line-clamp-2">
									{post.excerpt}
								</p>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</section>
	);
}
