import { Author } from "@/types/blog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Card className="not-prose">
      <CardContent className="flex items-center space-x-4 py-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{author.name}</p>
          <p className="text-sm text-muted-foreground">{author.bio}</p>
        </div>
      </CardContent>
    </Card>
  );
}