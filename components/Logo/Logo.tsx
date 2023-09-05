'use client';

import { FC } from 'react';
import Link from 'next/link';

import LogoImg from '@/public/logo.svg';

import { LogoProps } from './Logo.props';

export const Logo: FC<LogoProps> = ({ width = 38, height = 60, className }) => {
	return (
		<Link
			aria-label="Website logo that leads to the homepage"
			href="/"
			className={`inline-flex items-center text-base font-bold uppercase text-primary duration-300 hover:text-hover xl:text-[22px] xl:leading-none ${className}`}
		>
			<LogoImg
				className="md:h-[60px] md:w-[38px]"
				width={width}
				height={height}
				aria-label="Website icon"
			/>
			<div className="ml-[8.74px]">
				<span className="block xl:mb-[7px]">ühinenud</span>
				<span className="block">kohtutäiturid</span>
			</div>
		</Link>
	);
};
