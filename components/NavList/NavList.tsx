import { FC } from 'react';

import { NavItem } from '@/components/NavItem';

import { NavListProps } from './NavList.props';

export const NavList: FC<NavListProps> = ({ list }) => {
	return (
		<ul className="block md:flex md:flex-wrap md:gap-x-[16px] xl:gap-x-[82px] smOnly:space-y-10 ">
			<NavItem list={list} />
		</ul>
	);
};
