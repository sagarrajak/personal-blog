import Image from 'next/image';

interface MdxProps {
	mdxSource: React.ReactElement;
}
export function MDXComponent({ mdxSource }: MdxProps) {
	return <div>{mdxSource}</div>;
}
