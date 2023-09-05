'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Bailiff } from '@/components/Bailiff';
import { Checkbox } from '@/components/Checkbox';
import { CustomFieldset } from '@/components/CustomFieldset';
import { Input } from '@/components/Input';

import { schema } from './validateSchema';
import { IFormInputs } from './Form.types';

export const CustomForm = () => {
	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormInputs>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: IFormInputs) => {
		console.log(data);
		alert('See console');
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<CustomFieldset idAreaLabel="bailiff" className="mb-6 md:pr-[33px]">
				<Bailiff />
			</CustomFieldset>

			<CustomFieldset
				idAreaLabel="case and date"
				className="mb-[60px] grid gap-x-4 pb-[21px] md:grid-cols-2 smOnly:gap-y-5"
			>
				<Input
					id="data"
					type="text"
					text="Tänane kuupäev"
					register={{
						...register('data', {
							valueAsDate: true,
						}),
					}}
					errors={errors.data?.message}
				/>
				<Input
					id="case_number"
					type="text"
					text="Täiteasja number"
					register={{ ...register('case_number') }}
					errors={errors.case_number?.message}
				/>
			</CustomFieldset>

			<CustomFieldset
				idAreaLabel="sissenõudja"
				legend="Sissenõudja andmed:"
				className="mb-[60px] pb-[37px]"
			>
				<div className="grid gap-y-5 md:grid-cols-2 md:gap-x-4">
					<Input
						id="claimant_name"
						type="text"
						text="Ees-ja perekonnanimi/Äriühingu nimetus"
						register={{ ...register('claimant_name') }}
						errors={errors.claimant_name?.message}
					/>
					<Input
						id="claimant_registration"
						type="text"
						text="Isikukood/registrikood"
						register={{ ...register('claimant_registration') }}
						errors={errors.claimant_registration?.message}
					/>
					<Input
						id="claimant_address"
						type="text"
						text="Aadress"
						register={{ ...register('claimant_address') }}
						errors={errors.claimant_address?.message}
					/>
					<Input
						id="claimant_email"
						type="email"
						text="E-posti aadress"
						register={{ ...register('claimant_email') }}
						errors={errors.claimant_email?.message}
					/>
					<div className="relative flex items-center justify-center pt-[32px]">
						<span className="absolute left-0 top-0 text-lg tracking-[0.45px] text-secondary ">
							Telefon
						</span>

						<span className="px-3">+</span>

						<input
							type="tel"
							className={`${
								errors.claimant_phone_code?.message
									? 'border-error text-error'
									: 'border-secondary text-primary'
							} mr-2 h-[46px] w-[50px] rounded-[6px] border-[1px]   border-solid p-2 outline-none delay-300 hover:border-accent focus:border-accent`}
							{...register('claimant_phone_code')}
						/>
						{errors.claimant_phone_code?.message && (
							<p className="absolute bottom-[-30px] left-[34px] text-xs text-error">
								{errors.claimant_phone_code?.message}
							</p>
						)}

						<Input
							id="claimant_phone_number"
							type="tel"
							className="!mt-0"
							register={{ ...register('claimant_phone_number') }}
							errors={errors.claimant_phone_number?.message}
						/>
					</div>
				</div>
			</CustomFieldset>

			<CustomFieldset
				idAreaLabel="The debtor"
				legend="Võlgniku andmed:"
				className="mb-[27px] grid pb-[41px] md:grid-cols-2 md:gap-x-4 smOnly:gap-y-5"
			>
				<Input
					id="debtor_name"
					type="text"
					text="Ees-ja perekonnanimi/Äriühingu nimetus"
					register={{ ...register('debtor_name') }}
					errors={errors.debtor_name?.message}
				/>
				<Input
					id="debtor_registration"
					type="text"
					text="Isikukood/registrikood"
					register={{ ...register('debtor_registration') }}
					errors={errors.debtor_registration?.message}
				/>
			</CustomFieldset>

			<p className="form-text mb-4">
				Käesolevaga esitan taotluse täitemenetluse lõpetamiseks enne nõude täielikku sissenõudmist
				ning vastavalt Täitemenetluse seadustik § 43 lg 1 punkt 1 sätestatule palun kohtutäituril
				lõpetada eelnimetatud võlgniku suhtes algatatud täitemenetlus.
			</p>
			<p className="form-text mb-[21px]">
				Olen teadlik, et Kohtutäituri seaduse (KTS) § 41 lg 2 tulenevalt olen kohustatud maksma
				kohtutäiturile menetluse alustamise tasu ja poole menetluse põhitasust, arvestatuna
				sissenõudmata jäänud summalt. Palun edastada kohtutäituri tasu otsus sissenõudja eelnevalt
				märgitud e-posti aadiessile.
			</p>
			<p className="form-text mb-4">Avaldusele lisatud dokumendid:</p>

			<label className="button mb-10 h-[43px] w-[179px]">
				LISA DOKUMENT
				<input type="file" name="document_uploads" multiple className="sr-only" />
			</label>

			<Checkbox
				label="Kinnitan, et esitatud andmed on õiged.*"
				id="confirm_information"
				className="mb-8"
				register={{
					...register('confirm_information'),
				}}
				errors={errors.confirm_information?.message}
			/>

			<div className="flex justify-center gap-4">
				<button type="button" className="button h-[43px] w-[266px]">
					SALVESTA/PRINDI PDF
				</button>
				<button type="submit" className="button h-[43px] w-[374px]">
					ALLKIRJASTA DIGITAALSELT JA SAADA
				</button>
			</div>
		</form>
	);
};
