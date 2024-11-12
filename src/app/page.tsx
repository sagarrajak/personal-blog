import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/10 flex items-center justify-center p-4">
			<Card className="w-full max-w-2xl">
				<CardContent className="p-6 sm:p-8 flex flex-col items-center gap-6">
					<div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl">
						<img
							src="static/images/sagar.jpg?height=400&width=400"
							alt="Profile Picture"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="flex-1 text-center">
						<h1 className="text-3xl font-bold mb-2">Your Name</h1>
						<h2 className="text-xl text-muted-foreground mb-4">
							Frontend Developer
						</h2>
						<p className="text-muted-foreground mb-4">
							I'm a passionate frontend developer with a keen eye for design and
							a love for creating intuitive user experiences. My current work
							experience includes:
						</p>
						<ul className="list-disc list-inside text-muted-foreground mb-6 text-left">
							<li>
								Building responsive web applications using React and Next.js
							</li>
							<li>
								Collaborating with cross-functional teams in an agile startup
								environment
							</li>
							<li>
								Implementing modern UI/UX designs with Tailwind CSS and
								shadcn/ui
							</li>
							<li>
								Optimizing web performance and accessibility for a better user
								experience
							</li>
						</ul>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
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
