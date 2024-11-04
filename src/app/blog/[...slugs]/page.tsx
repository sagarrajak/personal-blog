import { MDXComponent } from '@/components/mdx-components'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import React from 'react'

import "../../../../styles/mdx.css"

interface PostPageParams {
	params: {
		slugs: string[]
	}
}
async function getPostFromParams(params: PostPageParams['params']) {
	const slug = params?.slugs && params.slugs?.length ? params.slugs[0] : '';
	const post = await getPostBySlug(slug);
	return post
}

export async function generateStaticParams(): Promise<PostPageParams['params'][]> {
	const postedPostes = await getAllPosts();
	return postedPostes.map((post) => ({ slugs: ['blog', post.frontmatter.slug] }))
}

export default async function PostPage({ params }: PostPageParams) {
	const post = await getPostFromParams(params);
	if (!post || !post.frontmatter.published)
		notFound()

	return (
		<article className='container py-6 prose lg:prose-xl max-w-3xl mx-auto'>
			<h1 className='mb-2 font-bold text-2xl'>{post.frontmatter.title}</h1>
			{post.frontmatter.description ? <p className='text-xl mt-0 text-muted-foreground'>{post.frontmatter.description}</p> : null}
			<hr className='my-4' />
			<MDXComponent mdxSource={post.content} />
		</article>
	)
}

