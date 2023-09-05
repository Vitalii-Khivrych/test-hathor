'use client';

import Image from 'next/image';
import { useState } from 'react';

const bailiffPerson = [
	{ photo: '', name: 'Persona 1', alt: 'Persona 1' },
	{ photo: '', name: 'Persona 2', alt: 'Persona 2' },
	{ photo: '', name: 'Persona 3', alt: 'Persona 3' },
];

const defaultPerson = {
	photo: '/defaultPhoto.png',
	name: 'Ühinenud Kohtutäiturid',
	alt: 'Ühinenud Kohtutäiturid',
};

export const Bailiff = () => {
	const [persona, setPersona] = useState(defaultPerson);

	return (
		<div className="flex items-center justify-between ">
			<div className="flex items-center space-x-4">
				<div className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#EDEDED]">
					<Image src={persona.photo} width={32} height={32} alt={persona.alt} />
				</div>

				<p className="text-lg tracking-[0.45px] text-primary">{persona.name}</p>
			</div>
			<button className="button h-10 w-[197px]" type="button">
				Vali kohtutäitur
			</button>
		</div>
	);
};
