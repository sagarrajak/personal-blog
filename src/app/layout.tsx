import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import SiteHeader from '@/components/site-header'
import { Providers } from "@/components/provider";
import { siteConfig } from "../../config/site";
import Footer from "@/components/footer";

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
};


export const viewport: Viewport = {
	themeColor: [
		{media: "(prefers-color-scheme: light)", color: "white"},
		{media: "(prefers-color-scheme: dark)", color: "black"}
	]
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-pt-[3.5em]">
			<body
				className={`${inter.variable} antialiased`}
			>
				<Providers>
					<div className="flex flex-col min-h-dvh bg-background">
						<SiteHeader />
						<main className="flex-1 font-sans">{children}</main>
						<Footer/>
					</div>
				</Providers>

			</body>
		</html>
	);
}
