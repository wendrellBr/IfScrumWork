// components/home/FeaturedPosts.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const featuredPosts = [
  {
    title: "Como o Scrum Funciona: Estrutura e Benefícios",
    excerpt: "Entenda como o Scrum se organiza em artefatos, funções e eventos, proporcionando clareza e comunicação entre os membros da equipe.",
    image: "https://images.unsplash.com/photo-1580983559367-0dc2f8934365?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Guias",
    readTime: "7 min de leitura",
    slug: "como-o-scrum-funciona",
  },
  // Adicione os outros artigos aqui
];

export function FeaturedPosts() {
  return (
    <section className="py-16 bg-muted/100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Artigos em Destaque</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Descubra insights, guias práticos e melhores práticas para dominar o desenvolvimento ágil.
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