"use client";
import { RouteChangeProvider } from "@/contexts/RouteChangedContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/animation/PageLoader";
import Links from "@/components/Links";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" type="text/css" href="/fonts/style.css" />
			</head>
			<RouteChangeProvider>
				<Navbar />
				<body className={inter.className}>{children}</body>
				<PageLoader />
			</RouteChangeProvider>
		</html>
	);
}
