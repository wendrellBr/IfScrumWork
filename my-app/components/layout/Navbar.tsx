"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	return (
		<nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					<Link href="/" className="flex items-center space-x-2">
						<span className="font-bold text-xl">IFPR - Insights</span>
					</Link>

					<div className="hidden md:flex space-x-8">
						<Link
							href="/"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Home
						</Link>
						<Link
							href="#articles"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Artigos
						</Link>
						<Link
							href="#contact"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Contato
						</Link>
					</div>

					<div className="hidden md:flex items-center space-x-4">
						<Button variant="ghost" className="text-blue-700">
							Conectar
						</Button>
						<Button>Criar conta</Button>

						<Button
							variant="outline"
							size="icon"
							onClick={() => setIsDarkMode(!isDarkMode)}
						>
							<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
