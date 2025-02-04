import prisma from '@/app/libs/prismadb';
import { IGetResult, IResult } from '@/types/resultType';

export default async function getResults(pharmacyId: any) {
	const results: IGetResult[] = await prisma.quiz.findMany({
		where: {
			pharmacyId,
		},
		orderBy: {
			createdAt: 'desc',
		},
		include: {
			questions: true,
			suggestedSupplements: true,
		},
	});

	return results;
}
