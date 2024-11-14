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
						<h1 className="text-4xl tracking-widest md:text-5xl font-bold mb-2 animate__animated animate__fadeIn">
							Sagar Rajak
						</h1>
						<h2 className="text-3xl tracking-widest md:text-4xl font-semibold text-muted-foreground mb-4 animate__animated animate__fadeIn">
							Senior fulllstack engineer
						</h2>
						<p className="text-muted-foreground mb-4 font-medium tracking-widest text-xl  font-sans pt-5 animate__animated animate__fadeInUp">
							Senior Software Engineer with 5+ years of expertise in full-stack
							development, specializing in building scalable web applications.
							Have extensive experience in building modern beautiful performant
							web.
						</p>
						<ul className="list-disc list-inside text-muted-foreground mb-6 mt-10 text-left child:mt-4 child:mb-4 animate__animated animate__fadeInUp">
							<li>
								Front-end expertise in React, Angular, and modern JavaScript
								frameworks. Skilled in building scalable projects with
								TypeScript and managing teams.
							</li>
							<li>
								Collaborated with cross-functional teams in an agile startup
								environment, leading a team of junior engineers and mentoring
								them to develop technical skills and foster professional growth.
							</li>
							<li>
								strong experience in frontend build system and tooling like
								webpack, vite, postcss, eslint, git, babel etc
							</li>
							<li>
								Very good experience with modern css and framworks like
								tailwind, sass, styeled-components, shadcn, material ui etc
							</li>
							<li>
								Familiar with CI/CD pipelines to streamline the deployment
								process and ensure continuous integration and delivery.
							</li>
							<li>
								Effective at code reviews and enforcing best practices,
								fostering a collaborative team environment. Skilled in
								troubleshooting and debugging complex issues to maintain high
								application reliability.
							</li>
							<li>
								Proven ability to reduce application bundle size and improve
								performance metrics, Adept at optimizing frontend performance
								through code splitting, lazy loading, and caching techniques.
							</li>
							<li>
								Extensive experience in working in series founded startups
							</li>
							<li>
								Also very good with git, docker, nodejs, mysql, postgres etc.
							</li>
						</ul>
						<div className="flex flex-col sm:flex-row justify-center gap-4 animate__animated animate__fadeIn">
							<Button asChild>
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
