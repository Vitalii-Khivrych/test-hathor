'use client';

import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const defaultPerson = {
	photo: '/defaultPhoto.png',
	name: 'Ühinenud Kohtutäiturid',
	alt: 'Ühinenud Kohtutäiturid',
};

export const Bailiff = () => {
	const [isOpen, setIsOpen] = useState(true);

	const handleModal = () => setIsOpen(!isOpen);

	return (
		<div className="flex items-center justify-between ">
			<div className="flex items-center space-x-4">
				<div className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#EDEDED] md:h-[56px] md:w-[56px]">
					<Image src={defaultPerson.photo} width={32} height={32} alt={defaultPerson.alt} />
				</div>

				<p className="text-sm tracking-[0.45px] text-primary md:text-lg">{defaultPerson.name}</p>
			</div>
			<button className="button h-10  w-[150px] md:w-[197px]" type="button" onClick={handleModal}>
				Vali kohtutäitur
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={handleModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
										Vali kohtutäitur
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-gray-500">Vali kohtutäitur</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="button mx-auto h-[40px] w-[120px]"
											onClick={handleModal}
										>
											Vali
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
};
