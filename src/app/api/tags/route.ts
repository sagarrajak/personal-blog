import { FrontMatter, getAllPosts, getAllTags } from "@/lib/mdx";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextApiRequest) {
	// try {
	// 	const { tags } = req.query as { tags: string[] };
	// 	const posts = await getAllPosts();

	// 	const tagsMap: Record<
	// 		string,
	// 		{ count: number; frontMatter: FrontMatter[] }
	// 	> = {};

	// 	for (const item of posts) {
	// 		item.frontmatter.tags.forEach((tag) => {
	// 			if (!tagsMap[tag]) tagsMap[tag] = { count: 0, frontMatter: [] };
	// 			tagsMap[tag].count++;
	// 			tagsMap[tag].frontMatter.push(item.frontmatter);
	// 		});
	// 	}

	// 	if (tags && tags.length) {
	// 		const reqestTagsMap = tags.reduce<Record<string, boolean>>(
	// 			(pre, curr) => {
	// 				pre[curr] = true;
	// 				return pre;
	// 			},
	// 			{}
	// 		);
	// 		const outputMap: Record<
	// 			string,
	// 			{ count: number; frontMatter: FrontMatter[] }
	// 		> = {};
	// 		for (const key of Object.keys(tags)) {
	// 			if (reqestTagsMap[key]) {
	// 				outputMap[key] = tagsMap[key];
	// 			}
	// 		}
	// 		return NextResponse.json(outputMap, { status: 200 });
	// 	}

	// 	return NextResponse.json(tagsMap, { status: 200 });
	// } catch (error) {
	// 	console.error(error);
	// 	return NextResponse.json(
	// 		{ error: "Failed to fetch posts" },
	// 		{ status: 500 }
	// 	);
	// }
	const alltags = await getAllTags()
	return alltags;
}
