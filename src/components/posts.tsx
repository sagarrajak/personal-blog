"use client";
import { PostContentType } from "@/app/blog/page";
import React, { useEffect, useState } from "react";
import { PostItem } from "./post-item";
import { useSearchParams } from "next/navigation";

function BlogPosts(props: { posts: PostContentType }) {
	const search = useSearchParams();
	const [posts, setPosts] = useState<PostContentType>(props.posts);

	useEffect(() => {
		const tagParams: string | null = search.get("tags");
		const tags = !!tagParams ? tagParams.split(",") : [];
		console.log({ tags });
		setPosts([
			...props.posts.filter((item) => {
				if (!tags || tags.length <= 0) return true;
				else {
					for (let singleTag of tags) {
						if (
							item.frontmatter.tags.findIndex((tag) => tag === singleTag) >= 0
						)
							return true;
					}
					return false;
				}
			}),
		]);
	}, [search.get("tags")]);

	return posts?.length > 0 ? (
		<ul className="flex flex-col">
			{posts
				.map(({ frontmatter }) => (
					<li key={frontmatter.slug}>
						<PostItem {...frontmatter} />
					</li>
				))}
		</ul>
	) : (
		<p>Nothing to see here yet</p>
	);
}

export default BlogPosts;
