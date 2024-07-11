import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'

export default function Nav() {
	return (
		<header className='padding-x py-8 z-10 absolute w-full'>
			<nav
				className='flex
      justify-between items-center max-container'
			>
				<a href='/'>
					<img src={headerLogo} alt='Logo' className='w-[130px] h-[29px]' />
				</a>
				<ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
					{navLinks.map(link => (
						<li key={link.label}>
							<a
								href={link.href}
								className='font-montserrat leading-normal text-lg text-slate-gray'
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
				<div className='hidden max-lg:block'>
					<img src={hamburger} alt='hamburger' className='w-[25px] h-[25px]' />
				</div>
			</nav>
		</header>
	)
}
