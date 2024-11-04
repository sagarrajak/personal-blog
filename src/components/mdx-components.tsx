import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';

const components = { Image };

interface MdxProps {
	mdxSource: MDXRemoteSerializeResult;
}
export function MDXComponent({ mdxSource }: MdxProps) {
	return <MDXRemote {...mdxSource} components={components} />;
}
