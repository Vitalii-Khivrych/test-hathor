import { FC } from 'react';

import { NavItem } from '@/components/NavItem';

import { NavListProps } from './NavList.props';

export const NavList: FC<NavListProps> = ({ list }) => {
	return (
		<ul className="smOnly::space-y-10 block md:flex md:flex-wrap md:gap-x-[20px] xl:gap-[82px] ">
			<NavItem list={list} />
		</ul>
	);
};
