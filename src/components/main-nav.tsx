"use client";

import Link from "next/link";
import { Icons } from "./icon";
import { siteConfig } from "../../config/site";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
	{
		name: "About",
		path: "about",
	},
	{
		name: "Blog",
		path: "blog",
	},
];

function MainNav() {
	const pathname = usePathname();

	return (
		<nav className="flex items-center space-x-4 lg:space-x-6">
			<Link href="/" className="ml-6 flex items-center space-x-2">
				<Icons.logo className="h-10 w-10" />
				<span className="font-bold">{siteConfig.name}</span>
			</Link>

			{routes.map((route) => (
				<div
					className="flex flex-col justify-center group hover:shadow-md  p-2"
					key={route.name}
				>
					<Link
						className={cn(
							"text-md font-medium transition-colors text-primary/60 hover:text-primary hidden sm:inline-block",
							pathname === `/${route.path}` ? "text-foreground" : "text-foreground/60"
						)}
						href={`/${route.path}`}
					>
						{route.name}
					</Link>
					<div
						className=" m-auto
              border-t-2
              w-0
              border-black
							dark:border-white
              opacity-0
              group-hover:opacity-100
              group-hover:w-full
              duration-300
              transition-all"
					></div>
				</div>
			))}
		</nav>
	);
}

export default MainNav;
