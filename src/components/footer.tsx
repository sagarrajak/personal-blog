import { cn } from "@/lib/utils";
import { Icons } from "./icon";
import { buttonVariants } from "./ui/button";
import { siteConfig } from "../../config/site";

function Footer() {
	return (
		<footer className="flex flex-col justify-center items-center p-20 w-full gap-3">
			<p className="leading-7 font-mono text-sm font-semibold">Contact me</p>
			<nav className="w-full flex flex-row justify-center items-center gap-5">
				<a
					className={cn(
						buttonVariants({ variant: "outline" }),
						"rounded-full hover:cursor-pointer"
					)}
					href={siteConfig.links.github}
					target="_blank"
				>
					<Icons.gitHub className="w-5 h-5" />
					<span className="sr-only">My Github link</span>
				</a>
				<a
					className={cn(
						buttonVariants({ variant: "outline" }),
						"rounded-full hover:cursor-pointer"
					)}
					href={siteConfig.links.linkedin}
					target="_blank"
				>
					<Icons.linkdin className="w-5 h-5" />
					<span className="sr-only">My Linkdin link</span>
				</a>
				<a
					className={cn(
						buttonVariants({ variant: "outline" }),
						"rounded-full hover:cursor-pointer"
					)}
					href={siteConfig.links.twitter}
					target="_blank"
				>
					<Icons.twitter className="w-5 h-5" />
					<span className="sr-only">My X link</span>
				</a>
			</nav>
		</footer>
	);
}

export default Footer;
