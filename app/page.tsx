import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CustomForm } from '@/components/Form';

export default function Home() {
	return (
		<section className="py-10 md:py-[60px] xl:py-[77.5px]">
			<div className="container xl:px-[192px]">
				<Breadcrumbs className="mb-[34px]" />

				<h1 className="mb-6 text-base font-bold tracking-[0.5px] text-primary md:text-xl">
					Avaldus täitemenetluse lõpetamiseks enne nõude rahuldamist
				</h1>
				<CustomForm />
			</div>
		</section>
	);
}
