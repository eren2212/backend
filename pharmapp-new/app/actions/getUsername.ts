import prisma from '@/app/libs/prismadb';

export default async function getUsername(email: string) {
	const username = await prisma.user.findUnique({
		where: { email },
		select: { name: true },
	});

	return username;
}
