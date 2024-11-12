"use client";

import React, { useEffect, useState } from "react";
import ChipButton from "./chips";
import { TagsType } from "@/app/blog/page";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Loader from "./loader";

function Tags(props: { tags: TagsType }) {
	const { tags } = props;
	const [activeTags, setActiveTags] = useState<Record<string, boolean>>({});
	const router = useRouter();
	const pathname = usePathname();
	const search = useSearchParams();

	useEffect(() => {
		const tags: string | null = search.get("tags");
		if (tags) {
			const currentActiveTags = tags
				.split(",")
				.reduce<Record<string, boolean>>((pre, cur) => {
					pre[cur] = true;
					return pre;
				}, {});
			setActiveTags({ ...currentActiveTags });
			console.log(currentActiveTags);
		}
	}, []);

	const addQueryParam = () => {
		const params = new URLSearchParams();
		params.set(
			"tags",
			Object.keys(activeTags)
				.map((item) => encodeURI(item))
				.toString()
		);
		router.push(`${pathname}?${params.toString()}`);
	};


	const setOnChange = (isAcitve: boolean, currentTag: string) => {
		if (!isAcitve) {
			delete activeTags[currentTag];
		} else {
			activeTags[currentTag] = true;
		}
		setActiveTags({ ...activeTags });
		addQueryParam();
	};

	return (
		<div className="flex flex-row justify-start gap-x-2 overflow-scroll py-2 h-20 m-auto items-center">
			{Object.keys(tags).map((tag) => (
				<ChipButton
					key={tag}
					isAcitve={!!activeTags[tag]}
					name={tag}
					onChange={(isAcitve: boolean) => {
						setOnChange(isAcitve, tag);
					}}
				/>
			))}
		</div>
	);
}

export default Tags;
