import { BlogPost, RelatedPost } from "@/types/blog";

const MOCK_POSTS: Record<string, BlogPost> = {
  "scrum-ceremonies-guide": {
    id: "1",
    slug: "scrum-ceremonies-guide",
    title: "The Complete Guide to SCRUM Ceremonies",
    excerpt: "Learn how to make the most of your Sprint Planning, Daily Standups, and Retrospectives.",
    content: `
# The Complete Guide to SCRUM Ceremonies

Sprint ceremonies are the heartbeat of any SCRUM team. They provide structure, foster collaboration, and ensure that everyone stays aligned with the project's goals.

## Sprint Planning

Sprint Planning is where it all begins. This ceremony sets the tone for the entire sprint by:

- Defining sprint goals
- Selecting items from the product backlog
- Breaking down work into manageable tasks

## Daily Standup

The Daily Standup, or Daily SCRUM, is a 15-minute time-boxed event where the team:

1. Reviews what was accomplished yesterday
2. Plans for today
3. Identifies any blockers

## Sprint Review

At the end of each sprint, the team demonstrates completed work to stakeholders and:

- Showcases new features
- Gathers feedback
- Updates the product backlog

## Sprint Retrospective

The Retrospective is where continuous improvement happens. Teams discuss:

- What went well
- What could be improved
- Action items for the next sprint
    `,
    publishedAt: "2024-03-20T10:00:00Z",
    author: {
      id: "1",
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Agile Coach & SCRUM Master with 10+ years of experience",
    },
    featuredImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    tags: ["SCRUM", "Agile", "Project Management"],
    readingTime: "8 min read",
  },

"guia-cerimonias-scrum":  {
id: "1",  
slug: "guia-cerimonias-scrum",  
title: "O Guia Completo das Cerimônias SCRUM",  
excerpt: "Aprenda a aproveitar ao máximo seu Planejamento de Sprint, Standups Diários e Retrospectivas.",  
content: `  
# O Guia Completo das Cerimônias SCRUM

As cerimônias do Scrum são o coração de qualquer time SCRUM. Elas fornecem estrutura, promovem a colaboração e garantem que todos estejam alinhados com os objetivos do projeto.

## Planejamento de Sprint

O Planejamento de Sprint é onde tudo começa. Essa cerimônia define o tom para toda a sprint ao:

- Definir os objetivos da sprint
- Selecionar itens do backlog do produto
- Dividir o trabalho em tarefas gerenciáveis

## Standup Diário

O Standup Diário, ou Daily SCRUM, é um evento de 15 minutos onde o time:

1. Revê o que foi realizado ontem
2. Planeja o que será feito hoje
3. Identifica possíveis obstáculos

## Revisão de Sprint

Ao final de cada sprint, o time demonstra o trabalho realizado para os stakeholders e:

- Apresenta as novas funcionalidades
- Coleta feedbacks
- Atualiza o backlog do produto

## Retrospectiva de Sprint

A Retrospectiva é o momento da melhoria contínua. O time discute:

- O que deu certo
- O que pode ser melhorado
- Ações para a próxima sprint
`,  
publishedAt: "2024-12-04T10:00:00Z",  
author: {  
  id: "1",  
  name: "Maria Silva",  
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",  
  bio: "Coach Ágil & SCRUM Master com mais de 10 anos de experiência",  
},  
featuredImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",  
tags: ["SCRUM", "Ágil", "Gestão de Projetos"],  
readingTime: "8 min de leitura",  
}
};

export async function getBlogPost(slug: string): Promise<BlogPost> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const post = MOCK_POSTS[slug];
  if (!post) {
    throw new Error("Post not found");
  }
  
  return post;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getRelatedPosts(slug: string): Promise<RelatedPost[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  // slug
  return [
    {
      id: "2",
      slug: "agile-estimation-techniques",
      title: "Agile Estimation Techniques",
      excerpt: "Master the art of story point estimation and planning poker.",
      featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      publishedAt: "2024-03-18T10:00:00Z",
    },
    {
      id: "3",
      slug: "product-backlog-refinement",
      title: "Product Backlog Refinement",
      excerpt: "Learn how to maintain a healthy and prioritized product backlog.",
      featuredImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
      publishedAt: "2024-03-15T10:00:00Z",
    },
  ];
}