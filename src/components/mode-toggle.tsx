"use client"


import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from "next-themes"

function ModeToggle() {
	const { setTheme, theme} = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className='w-10 h-10 mr-2'>
					<Sun className='rotate-0 scale-100 transition-all dark:-rotate-90  dark:scale-0' />
					<Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0  dark:scale-100' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='center' className="w-auto">
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem
					onCheckedChange={() => setTheme('dark')}
					checked={theme === 'dark'}
				>
					Dark
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					onCheckedChange={() => setTheme('light')}
					checked={theme === 'light'}
				>
					Light
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ModeToggle
