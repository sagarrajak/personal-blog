import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { sortBlogPost } from "@/lib/utils";

export default async function BlogPage() {

	const postedPostes = sortBlogPost(
		(posts || []).filter((post) => post.published)
	);

	const renderPosts = () => {
		return postedPostes?.length > 0 ? (
			<ul className="flex flex-col">
				{postedPostes.map((item) => (
					<li key={item.slug}>
						<PostItem {...item} />
					</li>
				))}
			</ul>
		) : (
			<p>Nothing to see here yet</p>
		);
	};

	return (
		<div className="container max-w-4xl py-6 lg:py-10 pl-3 md:pl-10">
			<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
				<div className="flex-1 space-y-4">
					<h1 className="inline-block font-black text-3xl md:text-5xl">Blog</h1>
					<p className="text-xl text-muted-foreground">
						All about tech and life
					</p>
				</div>
			</div>
			<hr className="mt-8" />
			{renderPosts()}
		</div>
	);
}
