import { posts } from '#site/content'
import { MDXComponent } from '@/components/mdx-components'
import { notFound } from 'next/navigation'
import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'

interface PostPageParams {
	params: {
		slugs: string[]
	}
}
async function getPostFromParams(params: PostPageParams['params']) {
	const slug = params?.slugs?.join("/")
	const post = posts.find(post => post.slugAsParams === slug);
	return post
}

export async function generateStaticParams(): Promise<PostPageParams['params'][]> {
	return posts.map((post) => ({ slugs: post.slugAsParams.split("/") }))
}

export default async function PostPage({ params }: PostPageParams) {
	const post = await getPostFromParams(params);
	if (!post || !post.published)
		notFound()

	return (
		<article className='container py-6 prose max-w-3xl mx-auto'>
			<h1 className='mb-2 font-bold text-2xl'>{post.title}</h1>
			{post.description ? <p className='text-xl mt-0 text-muted-foreground'>{post.description}</p> : null}
			<hr className='my-4' />
			<MDXComponent mdxSource={post.} />
		</article>
	)
}

