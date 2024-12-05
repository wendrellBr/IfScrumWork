"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {


  const navItems = [
    { label: "Home", href: "/" },
    { label: "Artigos", href: "#articles" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">IFPR - Insights</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-blue-700">Conectar</Button>
            <Button>Criar conta</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}