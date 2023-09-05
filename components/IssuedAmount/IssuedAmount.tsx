'use client';

import { useState, useEffect, FC } from 'react';

import { getRndInteger, transformNumber } from '@/utils';
import { IssuedAmountProps } from './IssuedAmount.props';

const TIMEOUT_DELAY: number = 2000;

export const IssuedAmount: FC<IssuedAmountProps> = ({ className }) => {
	const [amount, setAmount] = useState(12061157);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setAmount(amount + getRndInteger(0, 100));
		}, TIMEOUT_DELAY);

		return () => {
			clearTimeout(timerId);
		};
	}, [amount]);

	return (
		<div
			className={`${className} bg-[#FDE9D84F] pb-[3px] pt-[15px] text-right text-sm font-bold text-primary xl:text-2xl xl:leading-[44px]`}
		>
			<p className="container relative pr-[100px] md:pr-[160px] xl:pr-[220px]">
				Sellel aastsl sissenõudjatele üle kantud summa
				<span className="absolute left-[80%] top-0 xl:left-[84%]">€ {transformNumber(amount)}</span>
			</p>
		</div>
	);
};
