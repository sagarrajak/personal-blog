import { z } from "zod";
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { LineElement, Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { MergeType } from "./utils";
import { Callout } from "@/components/callout";
import remarkToc from "remark-toc"

export const PostSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.string(),
	published: z.boolean(),
	tags: z.array(z.string()),
	slug: z.string(),
	content: z.string(),
});

export type Post = MergeType<
	Omit<z.infer<typeof PostSchema>, "content"> & {
		content: React.ReactElement;
	}
>;

// src/lib/mdx.ts

const POSTS_PATH = path.join(process.cwd(), "content/blog");

const prettyCodeOptions: Options = {
	theme: "github-dark",
};

export async function getPostBySlug(slug: string) {
	const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
	const fileContent = fs.readFileSync(filePath, "utf8");

	const { content: compiledContent, frontmatter} = await compileMDX<Post>({
		source: fileContent,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
				remarkPlugins: [
					remarkGfm,
					remarkToc // GitHub Flavored Markdow
				],
				rehypePlugins: [
					rehypeSlug, // Add IDs to headings
					[
						rehypeAutolinkHeadings,
						{
							behavior: "wrap",
							properties: {
								className: ["subheading-anchor"],
								ariaLabel: "Link to section",
							},
						},
					], // Add anchor links to headings
					[rehypePrettyCode, prettyCodeOptions], // Syntax highlighting
				],
			},
		},
		components: {
			Image,
			Callout,
		},
	});

	return {
		frontmatter,
		content: compiledContent,
	};
}

export async function getAllPosts() {
	const files = fs.readdirSync(POSTS_PATH);
	const posts = await Promise.all(
		files
			.filter((file) => file.endsWith(".mdx"))
			.map(async (file) => {
				const slug = file.replace(/\.mdx$/, "");
				const { content, frontmatter } = await getPostBySlug(slug);
				frontmatter.slug = slug;
				return { content, frontmatter };
			})
	);

	// Sort posts by date in descending order
	return posts.sort(
		(a, b) =>
			new Date(b.frontmatter.date).getTime() -
			new Date(a.frontmatter.date).getTime()
	);
}

type FrontMatter = Awaited<ReturnType<typeof getPostBySlug>>['frontmatter']

export async function getAllTags() {
	try {
		const posts = await getAllPosts();

		const tagsMap: Record<
			string,
			{ count: number; frontMatter: FrontMatter[] }
		> = {};

		for (const item of posts) {
			item.frontmatter.tags.forEach((tag) => {
				if (!tagsMap[tag]) tagsMap[tag] = { count: 0, frontMatter: [] };
				tagsMap[tag].count++;
				tagsMap[tag].frontMatter.push(item.frontmatter);
			});
		}

		// if (tags && tags.length) {
		// 	const reqestTagsMap = tags.reduce<Record<string, boolean>>(
		// 		(pre, curr) => {
		// 			pre[curr] = true;
		// 			return pre;
		// 		},
		// 		{}
		// 	);
		// 	const outputMap: Record<
		// 		string,
		// 		{ count: number; frontMatter: FrontMatter[] }
		// 	> = {};
		// 	for (const key of Object.keys(tags)) {
		// 		if (reqestTagsMap[key]) {
		// 			outputMap[key] = tagsMap[key];
		// 		}
		// 	}
		// 	return NextResponse.json(outputMap, { status: 200 });
		// }

		return tagsMap;
	} catch (error) {
		console.error(error);
		return {};
	}
}
