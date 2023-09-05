import { FC } from 'react';

import { CustomFieldsetProps } from './CustomFieldset.props';

export const CustomFieldset: FC<CustomFieldsetProps> = ({
	idAreaLabel,
	legend,
	className,
	children,
}) => {
	return (
		<div
			role="group"
			aria-labelledby={idAreaLabel}
			className={`relative rounded-lg border-[1px] border-[#1A1A1F12] p-[17px] ${className}`}
		>
			<p className="absolute left-0 top-[-36px] text-lg tracking-[0.45px] text-label">{legend}</p>
			{children}
		</div>
	);
};
