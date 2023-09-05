import type { Metadata } from 'next';

import { Header } from '@/components/Header';
import './globals.css';

import localFont from 'next/font/local';

const omnesFont = localFont({
	src: [
		{
			path: './fonts/Omnes-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/Omnes-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
});

export const metadata: Metadata = {
	title: 'Test task',
	description: 'Test task by Hathor',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={omnesFont.className}>
			<body>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
