import ChipButton from "@/components/chips";
import BlogPosts from "@/components/posts";
import Tags from "@/components/tags";
import { getAllPosts, getAllTags } from "@/lib/mdx";

export type TagsType = Awaited<ReturnType<typeof getAllTags>>;
export type PostContentType = Awaited<ReturnType<typeof getAllPosts>>;

export default async function BlogPage() {
	const postedPostes = await getAllPosts();
	const tags = await getAllTags();

	return (
		<div className="w-full flex-1">
			<Tags tags={tags} />
			<div className="container max-w-4xl py-6 lg:py-10 pl-3 md:pl-10">
				<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
					<div className="flex-1 space-y-4">
						<h1 className="inline-block font-black text-3xl md:text-5xl">
							Blog
						</h1>
						<p className="text-xl text-muted-foreground">
							All about tech and life
						</p>
					</div>
				</div>
				<hr className="mt-8" />
				<BlogPosts posts={postedPostes} />
			</div>
		</div>
	);
}
