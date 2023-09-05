'use client';

import { FC, useState, MouseEvent } from 'react';

import { Logo } from '@/components/Logo';
import { IssuedAmount } from '@/components/IssuedAmount';
import { Navigation } from '@/components/Navigation';

import { IconButton } from '@/components/IconButton';

import { useCloseOnEsc } from '@/hooks';

import MobileMenuIcon from '@/public/mobile-menu.svg';
import CloseMenuIcon from '@/public/icon-close.svg';

const navList = [
	{ url: '/kohtutäitur', name: 'KOHTUTÄITUR' },
	{ url: '/võlgnikule', name: 'VÕLGNIKULE' },
	{ url: '/sissenõudjale', name: 'SISSENÕUDJALE' },
	{ url: '/ametiteenused', name: 'AMETITEENUSED' },
	{ url: '/enampakkumised', name: 'ENAMPAKKUMISED' },
	{ url: '/blanketid', name: 'BLANKETID' },
];

export const Header: FC = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const navbarToggleHandler = () => {
		setNavbarOpen(!navbarOpen);
	};

	const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
		if (e.currentTarget === e.target) {
			navbarToggleHandler();
		}
	};
	useCloseOnEsc(() => setNavbarOpen(false));

	return (
		<header>
			<IssuedAmount className="mb-[14px]" />
			<div className="container relative  smOnly:flex smOnly:items-center smOnly:justify-between ">
				<Logo className="md:mb-3 xl:mb-[22.5px]" />

				<div
					className={`absolute z-30 smOnly:bg-white/50 smOnly:backdrop-blur-[3px] ${
						navbarOpen
							? ' disable-scroll !fixed left-0 top-0 h-screen w-screen duration-500 '
							: '!static smOnly:hidden  '
					}`}
					onClick={handleBackdropClick}
				>
					<div className="relative ml-auto flex flex-col justify-between smOnly:h-screen smOnly:w-[240px] smOnly:bg-secondary smOnly:px-5 smOnly:py-[70px] ">
						<IconButton
							onClick={navbarToggleHandler}
							label="Close mobile menu icon"
							className="absolute right-5 top-[18px] flex items-center justify-center text-white xl:hidden"
						>
							<CloseMenuIcon width={24} height={24} className="h-6 w-6" />
						</IconButton>

						<Navigation list={navList} isOpen={navbarOpen} />
					</div>
				</div>

				<IconButton
					onClick={navbarToggleHandler}
					label="Open mobile menu icon"
					className="flex items-center justify-center text-primary  md:hidden"
				>
					<MobileMenuIcon width={24} height={24} className="h-6 w-6" />
				</IconButton>
			</div>
		</header>
	);
};
