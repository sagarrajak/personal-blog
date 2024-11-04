import { Post } from "#site/content";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string | number): string {
	const date = new Date(dateStr);
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export function sortBlogPost(posts: Post[]) {
	return posts.sort((lhs, rhs) => {
		const lhsDate = new Date(lhs.date);
		const rhsDate = new Date(rhs.date);
		return lhsDate < rhsDate ? 1 : lhsDate > rhsDate ? -1 : 0;
	});
}
