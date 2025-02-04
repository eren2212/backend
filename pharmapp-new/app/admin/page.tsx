import React from 'react';
import getCurrentUser from '../actions/getCurrentUser';
import { redirect } from 'next/navigation';
import Card from '../components/Card';
import Container from './components/Container';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import Links from './components/Links';

export async function generateMetadata() {
	return {
		title: 'Admin',
	};
}

{
	/* <Authentication type='register' />; */
}

const AdminDashboard = async () => {
	const user = await getCurrentUser();
	if (user?.role != 'ADMIN') redirect('/login');

	return (
		<main>
			<Container>
				<Links />
			</Container>
		</main>
	);
};

export default AdminDashboard;
