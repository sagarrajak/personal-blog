import Link from 'next/link'
import React from 'react'
import { siteConfig } from '../../config/site'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { Icons } from './icon'
import MainNav from './main-nav'
import MobileNav from './mobile-nav'
import ModeToggle from './mode-toggle'

function SiteHeader() {
  return (
    <div className='sticky top-0 w-full border-b  border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background:60 z-[1]'>
      <div className='flex h-14 items-center w-full'>
        <MainNav />
        <div className='flex flex-1 items-center justify-end space-x-2'>
          <nav className='flex items-center'>
            <Link href={siteConfig.links.github} target='_blank' rel='noreferrer' >
              <div className={cn(buttonVariants({ variant: 'ghost' }), 'w-10', 'px-0', 'hidden sm:inline-flex')}>
                <Icons.gitHub className='h-4 w-4' />
                <span className='sr-only'>Github</span>
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target='_blank' rel='noreferrer' >
              <div className={cn(buttonVariants({ variant: 'ghost' }), 'w-10', 'px-0', 'hidden sm:inline-flex')}>
                <Icons.twitter className='h-4 w-4' />
                <span className='sr-only'>Twitter</span>
              </div>
            </Link>
            <Link href={siteConfig.links.linkedin} target='_blank' rel='noreferrer' >
              <div className={cn(buttonVariants({ variant: 'ghost' }), 'w-10', 'px-0', 'hidden sm:inline-flex')}>
                <Icons.linkdin className='h-4 w-4' />
                <span className='sr-only'>Linkedin</span>
              </div>
            </Link>
          </nav>
        </div>
				<ModeToggle/>
        <MobileNav/>
      </div>
    </div>
  )
}

export default SiteHeader
