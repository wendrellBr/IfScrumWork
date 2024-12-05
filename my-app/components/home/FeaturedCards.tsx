import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const featuredPosts = [
	{
		title: "Como o Scrum Funciona: Estrutura e Benefícios",
		excerpt:
			"Entenda como o Scrum se organiza em artefatos, funções e eventos, proporcionando clareza e comunicação entre os membros da equipe.",
		image:
			"https://images.unsplash.com/photo-1580983559367-0dc2f8934365?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Guias",
		readTime: "7 min de leitura",
	},
	{
		title:
			"Os Artefatos do Scrum: Product Backlog, Sprint Backlog e Incremento",
		excerpt:
			"Saiba como os três principais artefatos do Scrum ajudam a manter a equipe organizada e focada nas prioridades do projeto.",
		image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
		category: "Guias",
		readTime: "6 min de leitura",
	},
	{
		title: "Funções Essenciais do Scrum: Equipe, Product Owner e Scrum Master",
		excerpt:
			"Explore as responsabilidades do Product Owner, Scrum Master e da equipe de desenvolvimento na metodologia Scrum.",
		image:
			"https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Equipe Scrum",
		readTime: "8 min de leitura",
	},
	{
		title: "Scrum no Desenvolvimento de Software: Garantindo Qualidade e ROI",
		excerpt:
			"Como o Scrum melhora a qualidade do software e o retorno sobre o investimento, focando nas necessidades do cliente e no valor entregue.",
		image:
			"https://images.pexels.com/photos/7437100/pexels-photo-7437100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Software",
		readTime: "9 min de leitura",
	},
	{
		title: "Equipes Mais Felizes e Produtivas com Scrum",
		excerpt:
			"A metodologia Scrum promove um ambiente de trabalho colaborativo e flexível, resultando em equipes mais motivadas e produtivas.",
		image:
			"https://images.pexels.com/photos/7213210/pexels-photo-7213210.jpeg?auto=compress&cs=tinysrgb&w=600 ",
		category: "Cultura de Equipe",
		readTime: "6 min de leitura",
	},
	{
		title:
			"Estimativas Mais Precisas no Scrum: Como a Iteração Melhora o Planejamento",
		excerpt:
			"Aprenda como o Scrum permite que as equipes ajustem suas estimativas e planejem melhor o progresso do projeto ao longo do tempo.",
		image:
			"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600 ",
		category: "Planejamento",
		readTime: "7 min de leitura",
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
							<Link href="#" key={index}>
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
									<CardContent>
										<p className="text-muted-foreground line-clamp-3">
											{post.excerpt}
										</p>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
