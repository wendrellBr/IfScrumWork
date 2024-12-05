"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonsProps {
	url: string;
	title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
	const shareUrl = encodeURIComponent(url);
	const shareTitle = encodeURIComponent(title);

	const handleCopyLink = async () => {
		await navigator.clipboard.writeText(url);
		toast.success("Link copied to clipboard!");
	};

	return (
		<div className="flex gap-2 not-prose">
			<Button
				size="icon"
				variant="outline"
				onClick={() =>
					window.open(
						`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
						"_blank",
					)
				}
				aria-label="Share on Twitter"
			>
				<Twitter className="h-4 w-4" />
			</Button>
			<Button
				size="icon"
				variant="outline"
				onClick={() =>
					window.open(
						`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
						"_blank",
					)
				}
				aria-label="Share on LinkedIn"
			>
				<Linkedin className="h-4 w-4" />
			</Button>
			<Button
				size="icon"
				variant="outline"
				onClick={() =>
					window.open(
						`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
						"_blank",
					)
				}
				aria-label="Share on Facebook"
			>
				<Facebook className="h-4 w-4" />
			</Button>
			<Button
				size="icon"
				variant="outline"
				onClick={handleCopyLink}
				aria-label="Copy link"
			>
				<Link2 className="h-4 w-4" />
			</Button>
		</div>
	);
}
