import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

// excerpt
const featuredPosts = [
	{
		slug: "como-scrum-funciona",
		title: "Como o Scrum funciona?",
		image:
			"https://images.pexels.com/photos/6804077/pexels-photo-6804077.jpeg?auto=compress&cs=tinysrgb&w=600 ",
		category: "Guias",
		readTime: "3 min de leitura",
	},
	{
		slug: "sucesso-scrum-valores",
		title: "O sucesso do SCRUM",
		image:
			"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600 ",
		category: "Guias",
		readTime: "4 min de leitura",
	},
	{
		slug: "funcoes-scrum-equipe",
		title: "Funções Essenciais da Equipe Scrum",
		image:
			"https://images.pexels.com/photos/7437100/pexels-photo-7437100.jpeg?auto=compress&cs=tinysrgb&w=600",
		category: "Guias",
		readTime: "6 min de leitura",
	},
	{
		slug: "desenvolvimento-scrum-Software",
		title: "O Scrum no Desenvolvimento de Software",
		image:
			"https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=300",
		category: "Guias",
		readTime: "4 min de leitura",
	},
	{
		slug: "ajuda-scrum-gestao",
		title: "Como o Scrum Ajuda na Gestão de Riscos",
		image:
			"https://images.pexels.com/photos/7640766/pexels-photo-7640766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
		category: "Guias",
		readTime: "4 min de leitura",
	},
	{
		slug: "impacta-scrum-cultura",
		title: "Scrum e a Cultura Organizacional",
		image:
			"https://images.pexels.com/photos/5240544/pexels-photo-5240544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Guias",
		readTime: "4 min de leitura",
	},
];

export function FeaturedPosts() {
	return (
		<section className="py-16 bg-muted/100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="space-y-12">
					<div className="text-center">
						<h2 className="text-3xl font-bold">Artigos em Destaque</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Descubra insights, guias práticos e melhores práticas para dominar
							o desenvolvimento ágil.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{featuredPosts.map((post, index) => (
							<Link href={`/blog/${post.slug}`} key={index}>
								<Card className="h-full hover:shadow-lg transition-shadow">
									<div className="relative h-48">
										<Image
											src={post.image}
											alt={post.title}
											fill
											className="object-cover rounded-t-lg"
										/>
									</div>
									<CardHeader>
										<div className="flex items-center justify-between mb-2">
											<Badge>{post.category}</Badge>
											<span className="text-sm text-muted-foreground">
												{post.readTime}
											</span>
										</div>
										<CardTitle className="line-clamp-2">{post.title}</CardTitle>
									</CardHeader>
									<CardContent></CardContent>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
