import { Post } from "#site/content";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";

export type PostItemProps = Post

export function PostItem({ slug, title, description, date }: PostItemProps) {
	return <article className="flex flex-col gap-2 border border-border border-b my-3 p-3 rounded-md shadow-sm hover:shadow-md hover:cursor-pointer">
		<div>
			<h2 className="text-2xl font-bold">
				<Link href={slug}>{title}</Link>
			</h2>
		</div>
		<div className="max-w-none text-muted-foreground">
			{description}
		</div>
		<div className="flex justify-between items-center">
			<dl>
				<dt className="sr-only">Published On</dt>
				<dd className="text-sm sm:text-base font-medium flex items-center gap-1">
					<Calendar className="h-4 w-4" />
					<time dateTime={date}>{formatDate(date)}</time>
				</dd>
			</dl>
			<Link href={['blog', slug].join("/")} className={cn(buttonVariants({ variant: 'link' }), 'py-0')}>
				Read More
			</Link>
		</div>
	</article>
}
