import Link from 'next/link';
import { Key, FC } from 'react';

import { BreadcrumbsProps } from './Breadcrumbs.props';

const breadcrumbs = [
	{ path: '/avaleht/blanketid', title: 'Blanketid' },
	{ path: '/avaleht/blanketid/sissenõudja-blanketid', title: 'Sissenõudja blanketid' },
	{
		path: '/avaleht/blanketid/sissenõudja-blanketid/avaldus-täitemenetluse-lõpetamiseks-enne-nõude-rahuldamist',
		title: 'Avaldus täitemenetluse lõpetamiseks enne nõude rahuldamist',
	},
];

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ className }) => {
	return (
		<nav className={`text-xs tracking-[0.3px] text-secondary smOnly:sr-only ${className}`}>
			<ul className="flex ">
				<li>
					<Link href="/avaleht" className="">
						Avaleht
					</Link>
				</li>
				{breadcrumbs.map((breadcrumb, index: Key) => (
					<li key={index}>
						<span className="mx-1">/</span>
						<Link href={breadcrumb.path} className="">
							{breadcrumb.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
