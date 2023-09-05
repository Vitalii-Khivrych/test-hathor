'use client';

import { FC, useEffect, useState } from 'react';

import Check from '@/public/check.svg';
import Uncheck from '@/public/uncheck.svg';

import { CheckboxProps } from './Checkbox.props';

export const Checkbox: FC<CheckboxProps> = ({ label, className, id = '', errors, register }) => {
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};

	return (
		<label
			className={`relative inline-flex cursor-pointer items-center gap-[10px] ${className}`}
			onChange={handleChange}
			aria-label={label}
		>
			<input type="checkbox" className="sr-only" checked={checked} id={id} {...register} required />

			{checked ? (
				<Check width={16} height={16} className=" mt-[2px] h-4 w-4" />
			) : (
				<Uncheck width={16} height={16} className="mt-[2px] h-4 w-4" />
			)}

			<span className=" text-lg tracking-[0.45px] text-[#6B7280] ">{label}</span>

			{errors && <p className="absolute bottom-[-12px] text-xs text-error">{errors}</p>}
		</label>
	);
};
