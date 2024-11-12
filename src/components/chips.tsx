"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

export interface ChipsProps {
	name: string;
	onChange: (active: boolean) => void;
	isAcitve: boolean;
}

import { Check } from "lucide-react";

const ChipButton: React.FC<ChipsProps> = ({
	name,
	onChange,
	isAcitve,
}) => {
	const [isActive, setIsActive] = useState<boolean>(isAcitve);
	const classes = cn(
		"px-5 py-2 font-normal tracking-wide text-base shadow dark:shadow-white hover:shadow-sm  dark:border-white border-black rounded-full bg-white/30 dark:bg-black/30 text-gray-900 dark:text-white backdrop-blur-lg transition-all duration-150  border text-nowrap",
		isActive ? "border-primary text-primary" : ""
	);
	return (
		<button
			className={classes+" flex flex-row"}
			onClick={() => {
				onChange(!isActive);
				setIsActive((active) => !active);
			}}
		>
			{name}
			{isActive && <Check className="ml-2 w-30 h-30 dark:text-white" />}
		</button>
	);
};

export default ChipButton;
