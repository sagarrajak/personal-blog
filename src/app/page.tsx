import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/10 flex z-0 justify-center p-4">
			<Card className="w-full max-w-5xl">
				<CardContent className="p-6 sm:p-8 flex flex-col items-center gap-6">
					<div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl">
						<img
							src="static/images/sagar.jpg"
							alt="Profile Picture"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="flex-1 text-center">
						<h1 className="text-4xl tracking-widest md:text-5xl font-bold mb-2 animate__animated animate__fadeIn">Sagar Rajak</h1>
						<h2 className="text-3xl tracking-widest md:text-4xl font-semibold text-muted-foreground mb-4 animate__animated animate__fadeIn">
							Senior Software engineer
						</h2>
						<p className="text-muted-foreground mb-4 font-medium tracking-widest text-xl  font-sans pt-5 animate__animated animate__fadeInUp">
							Senior Software Engineer with 5+ years of expertise in full-stack
							development, specializing in building scalable web applications
							and microservices. Proven track record of leading teams,
							architecting solutions, and optimizing application performance.
						</p>
						<ul className="list-disc list-inside text-muted-foreground mb-6 mt-10 text-left child:mt-4 child:mb-4 animate__animated animate__fadeInUp">
							<li>
								Front-end expertise in React, Angular, and modern JavaScript
								frameworks
							</li>
							<li>
								Collaborating with cross-functional teams in an agile startup
								environment
							</li>
							<li>
								Strong back-end experience with Java Spring Boot and Node.js
							</li>
							<li>
								Deep knowledge of database systems including PostgreSQL,
								MongoDB, and Elasticsearch
							</li>
							<li>
								Proven ability to reduce application bundle size and improve
								performance metrics
							</li>
							<li>
								Track record of building and leading successful development
								teams
							</li>
						</ul>
						<div className="flex flex-col sm:flex-row justify-center gap-4 animate__animated animate__fadeIn">
							<Button asChild >
								<Link href="/blog">Show My Blog</Link>
							</Button>
							<Button asChild variant="outline">
								<Link href="/about">My profesional experience</Link>
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
