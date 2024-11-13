import { MDXComponent } from "@/components/mdx-components";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import React from "react";

import "../../../../styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "../../../../config/site";

interface PostPageParams {
	params: {
		slugs: string[];
	};
}
async function getPostFromParams(params: PostPageParams["params"]) {
	const slug = params?.slugs && params.slugs?.length ? params.slugs[0] : "";
	const post = await getPostBySlug(slug);
	return post;
}

export async function generateMetadata({
	params,
}: PostPageParams): Promise<Metadata> {
	const post = await getPostFromParams(params);
	if (!post || !post.frontmatter.published) return {};
	const searchParams = new URLSearchParams();
	searchParams.set("title", post.frontmatter.title);
	return {
		title: post.frontmatter.title,
		description: post.frontmatter.description,
		authors: {
			name: siteConfig.author,
		},
		keywords: post.frontmatter.tags,
		applicationName: siteConfig.name,
		creator: siteConfig.author,
		publisher: siteConfig.author,
		openGraph: {
			title: post.frontmatter.title,
			description: post.frontmatter.description,
			url: post.frontmatter.slug,
			type: "article",
			images: [
				{
					url: `/api/og?${searchParams.toString()}`,
					width: 1200,
					height: 630,
					alt: post.frontmatter.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.frontmatter.title,
			description: post.frontmatter.description,
			images: [`/api/og?${searchParams.toString()}`],
		},
	};
}

export async function generateStaticParams(): Promise<
	PostPageParams["params"][]
> {
	try {
		const postedPostes = await getAllPosts();
		return postedPostes.map((post) => ({ slugs: [post.frontmatter.slug] }));
	} catch (Err) {
		console.error(Err);
	}
	return [];
}

export default async function PostPage({ params }: PostPageParams) {
	const post = await getPostFromParams(params);
	if (!post || !post.frontmatter.published) notFound();

	return (
		<div className="w-full flex-1 bg-pattern-dark">
			<article
				className="
		container
		px-3
		py-6
		prose
		prose-stone
		dark:prose-invert
		lg:prose-xl
		max-w-3xl
		mx-auto
		prose-img:rounded-sm
		prose-img:shadow-2xl
		"
			>
				<h1 className="mb-2 font-bold text-2xl">{post.frontmatter.title}</h1>
				{post.frontmatter.description ? (
					<p className="text-xl mt-0 text-muted-foreground">
						{post.frontmatter.description}
					</p>
				) : null}
				<hr className="my-4" />
				<MDXComponent mdxSource={post.content} />
			</article>
		</div>
	);
}
