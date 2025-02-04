import React, { ReactNode } from 'react';
import Sidebar from '@/app/components/Sidebar';
import getUsername from '../actions/getUsername';
import getCurrentUser from '../actions/getCurrentUser';
import { redirect } from 'next/navigation';

interface ILayout {
	children: ReactNode;
}

const Layout = async ({ children }: ILayout) => {
	// Route Protecting
	const user = await getCurrentUser();
	if (!user) redirect('/login');
	if (user.role == 'ADMIN') redirect('/admin');

	return (
		<div className='w-full h-full  bg-opacity-100 bg-main-bg bg-center bg-cover '>
			<div className='w-full h-full flex bg-[#000000]/80'>
				<Sidebar username={user?.name?.toLocaleLowerCase()!} />
				<div className='p-4 md:p-16 flex-grow relative overflow-hidden'>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Layout;
