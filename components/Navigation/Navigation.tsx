import { FC } from 'react';

import { NavList } from '@/components//NavList';

import { NavigationProps } from './Navigation.props';

export const Navigation: FC<NavigationProps> = ({ list, isOpen = false }) => {
	return (
		<nav
			id="navbarCollapse"
			className={`text-sm font-bold leading-none text-primary md:visible  md:opacity-100 xl:w-auto  xl:border-none xl:bg-transparent xl:p-0 xl:text-base ${
				isOpen ? 'visibility  opacity-100' : 'invisible top-[120%] opacity-0'
			}`}
		>
			<NavList list={list} />
		</nav>
	);
};
