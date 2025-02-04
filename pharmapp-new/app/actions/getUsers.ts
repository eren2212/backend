import prisma from '@/app/libs/prismadb';
import { IGetResult, IResult } from '@/types/resultType';

export default async function getUsers() {
	const users = await prisma.user.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	});

	return users;
}
