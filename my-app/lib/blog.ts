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

export async function getRelatedPosts(slug: string): Promise<RelatedPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
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