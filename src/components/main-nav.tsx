"use client";

import Link from "next/link";
import { Icons } from "./icon";
import { siteConfig } from "../../config/site";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="ml-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        className={cn(
          "text-sm font-medium transition-colors text-primary/60 hover:text-primary hidden sm:inline-block",
          pathname === "blog"
            ? "underline text-foreground"
            : "text-foreground/60"
        )}
        href="/recent"
      >
        Recent
      </Link>
      <Link
        className={cn(
          "text-sm font-medium transition-colors text-primary/60 hover:text-primary hidden sm:inline-block",
          pathname === "blog"
            ? "underline text-foreground"
            : "text-foreground/60"
        )}
        href="/about"
      >
        About
      </Link>
      <Link
        className={cn(
          "text-sm font-medium transition-colors text-primary/60 hover:text-primary hidden sm:inline-block",
          pathname === "blog"
            ? "underline text-foreground"
            : "text-foreground/60"
        )}
        href="/blog"
      >
        Blog
      </Link>
    </nav>
  );
}

export default MainNav;
