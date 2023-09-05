import { FC } from 'react';

import { NavList } from '@/components//NavList';

import { NavigationProps } from './Navigation.props';

export const Navigation: FC<NavigationProps> = ({ list, isOpen = false }) => {
	return (
		<nav
			id="navbarCollapse"
			className={`text-sm font-bold leading-none text-accent duration-300 md:visible md:text-primary md:opacity-100 xl:w-auto  xl:border-none xl:bg-transparent xl:p-0 xl:text-base ${
				isOpen ? 'visibility  opacity-100' : 'invisible  opacity-0'
			}`}
		>
			<NavList list={list} />
		</nav>
	);
};
