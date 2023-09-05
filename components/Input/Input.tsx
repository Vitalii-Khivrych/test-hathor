import { FC } from 'react';

import { InputTypes } from './Input.props';

export const Input: FC<InputTypes> = ({
	type = 'text',
	text = '',
	id,
	register,
	errors = '',
	className,
}) => {
	return (
		<div className="relative w-full">
			<label className="text-lg tracking-[0.45px] text-secondary ">
				{text}
				<input
					type={type}
					className={`${
						errors ? 'border-error text-error' : 'border-secondary text-primary'
					} mt-1 h-[46px] w-full rounded-[6px] border-[1px] border-solid   p-2  outline-none delay-300 hover:border-accent focus:border-accent ${className} `}
					name={id}
					{...register}
				/>
			</label>

			{errors && <p className="absolute text-xs text-error">{errors}</p>}
		</div>
	);
};
