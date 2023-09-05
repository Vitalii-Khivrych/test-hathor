import { UseFormRegisterReturn } from 'react-hook-form';

export type InputTypes = {
	type: 'text' | 'tel' | 'email';
	text?: string;
	id: string;
	className?: string;
	errors?: string | undefined;
	register?: UseFormRegisterReturn;
};
