export interface Author {
	id: string;
	name: string;
	avatar: string;
	bio: string;
}

export interface BlogPost {
	id: string;
	slug: string;
	title: string;
	excerpt?: string;
	content: string;
	publishedAt: string;
	author: Author;
	featuredImage: string;
	tags: string[];
	readingTime: string;
}

export interface RelatedPost {
	id: string;
	slug: string;
	title: string;
	excerpt?: string;
	featuredImage: string;
	publishedAt: string;
}
