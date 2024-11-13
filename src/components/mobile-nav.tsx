"use client";
import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "../../config/site";
import { Icons } from "./icon";


const routes = [
	{
		name: "Home",
		path: "/",
		icon: <Icons.home className="w-5 h-5" />,
	},
	{
		name: "About",
		path: "about",
		icon: <Icons.about className="w-5 h-5" />,
	},
	{
		name: "Blog",
		path: "blog",
		icon: <Icons.blog className="w-5 h-5" />,
	},
];

function MobileNav() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" className="w-10 h-10 sm:hidden mr-2">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle Theme</span>
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Sagar's blog</SheetTitle>
				</SheetHeader>
				<div className="flex flex-col flex-1 justify-start items-center mt-10 my-10 hover:cursor-pointer">
					{routes.map((route) => (
						<SheetClose className="w-full border-t border hover:bg-background/20 flex flex-row justify-between py-3 px-2 font-medium">
							<Link href={route.path}>{route.name}</Link>
							{route.icon}
						</SheetClose>
					))}
				</div>
				<div className="flex flex-row items-center justify-center gap-x-2 w-full">
					<nav className="flex items-center">
						<Link
							href={siteConfig.links.github}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={cn(
									buttonVariants({ variant: "ghost" }),
									"w-10",
									"px-0",
									"inline-flex md:hidden"
								)}
							>
								<Icons.gitHub className="h-4 w-4" />
								<span className="sr-only">Github</span>
							</div>
						</Link>
						<Link
							href={siteConfig.links.twitter}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={cn(
									buttonVariants({ variant: "ghost" }),
									"w-10",
									"px-0",
									"inline-flex md:hidden"
								)}
							>
								<Icons.twitter className="h-4 w-4" />
								<span className="sr-only">Twitter</span>
							</div>
						</Link>
						<Link
							href={siteConfig.links.linkedin}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={cn(
									buttonVariants({ variant: "ghost" }),
									"w-10",
									"px-0",
									"inline-flex md:hidden"
								)}
							>
								<Icons.linkdin className="h-4 w-4" />
								<span className="sr-only">Linkedin</span>
							</div>
						</Link>
					</nav>
				</div>
			</SheetContent>
		</Sheet>
	);
}

export default MobileNav;
