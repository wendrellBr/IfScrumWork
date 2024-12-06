"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook, Link2 } from "lucide-react";

interface ShareButtonsProps {
	url: string;
	title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
	console.log(url, title);

	return (
		<div className="flex gap-2 not-prose">
			<Button size="icon" variant="outline" aria-label="Share on Twitter">
				<Twitter className="h-4 w-4" />
			</Button>
			<Button size="icon" variant="outline" aria-label="Share on LinkedIn">
				<Linkedin className="h-4 w-4" />
			</Button>
			<Button size="icon" variant="outline" aria-label="Share on Facebook">
				<Facebook className="h-4 w-4" />
			</Button>
			<Button size="icon" variant="outline" aria-label="Copy link">
				<Link2 className="h-4 w-4" />
			</Button>
		</div>
	);
}
