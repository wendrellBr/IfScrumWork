import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404 - Página não encontrada</h1>
        <p className="text-muted-foreground">
            A página que você está procurando não existe ou foi removida.
        </p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}