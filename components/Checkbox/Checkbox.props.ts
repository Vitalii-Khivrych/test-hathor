import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface CheckboxProps
	extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	label: string;
	className?: string;
	id: string;
	register: UseFormRegisterReturn;
	errors?: string | undefined;
}
