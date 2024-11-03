"use client"


import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from "next-themes"

function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className='w-10 h-10 mr-2'>
					<Sun className='rotate-0 scale-100 transition-all dark:-rotate-90  dark:scale-0' />
					<Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0  dark:scale-100' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='center' className="w-auto">
				{/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={() => setTheme('dark')}
				>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme('light')}
				>
					Light
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ModeToggle
