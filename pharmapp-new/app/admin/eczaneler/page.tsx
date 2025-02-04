import getUsers from '@/app/actions/getUsers';
import React from 'react';
import Container from '../components/Container';
import moment, { now } from 'moment';
import 'moment/locale/tr';
import DeleteButton from '../components/DeleteButton';

const page = async () => {
	const allUsers = await getUsers();

	return (
		<main className='h-full   '>
			<div></div>
			<Container>
				<div className=' h-full p-2 rounded-lg border bg-[#f4f4f4]/90'>
					<ul className=' flex justify-between border-b-2 border-black pb-2 [&_li]:ml-4 [&_li]:flex-1 [&_li]:text-center   text-gray-400 px-4 mb-4 '>
						<li>Eczane Adı</li>
						<li>Email</li>
						<li>Aktif Süre</li>
						<li>Kayıt Tarihi</li>
					</ul>

					{allUsers.map(({ name, email, createdAt }, i) => (
						<ul
							className='text-black flex justify-between  py-2 [&_li]:ml-4 [&_li]:flex-1 [&_li]:text-center border-b rounded-lg border-gray-400 cursor-pointer transition hover:shadow-md hover:bg-gray-400/60 relative group'
							key={i}>
							<li>{name}</li>
							<li>{email}</li>
							<li>
								<span className='inline-block w-2/5 border border-black px-2 rounded-xl bg-green-300/80'>
									{moment(Date.now()).diff(createdAt, 'days')} gün
								</span>
							</li>
							<li>{moment(createdAt).format('LL')}</li>
							<div
								className={`absolute transition opacity-0 group-hover:opacity-100 `}>
								<DeleteButton />
							</div>
						</ul>
					))}
				</div>
			</Container>
		</main>
	);
};

export default page;
