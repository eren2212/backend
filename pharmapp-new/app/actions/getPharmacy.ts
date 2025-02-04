import prismadb from '@/app/libs/prismadb';

export async function getPharmacy(pharmacyName: string) {
	const currentPharmacy = await prismadb.user.findFirst({
		where: {
			name: pharmacyName,
		},
	});

	return currentPharmacy;
}
