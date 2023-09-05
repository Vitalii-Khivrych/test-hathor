import { FC } from 'react';

import { IconButtonProps } from './IconButton.props';

export const IconButton: FC<IconButtonProps> = ({
	className,
	label,
	children,
	type = 'button',
	onClick,
}) => {
	return (
		<button
			type={type}
			className={`
				h-fit w-fit duration-300 hover:outline-accent focus:outline-accent
				${className}
			`}
			aria-label={label}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
