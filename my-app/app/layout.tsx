import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SCRUM Blog - Master Agile Development",
	description:
		"Learn SCRUM and agile methodologies through expert insights, practical guides, and best practices.",
	keywords: ["SCRUM", "Agile", "Project Management", "Software Development"],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
