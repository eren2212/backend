'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/app/components/Card';
import { signOut } from 'next-auth/react';

const actionList = [
	{ action: 'Eczane Ekle', href: '/admin/eczane_ekle' },
	{ action: 'Eczaneler', href: '/admin/eczaneler' },
	{ action: 'Çıkış', href: '' },
];

const Links = () => {
	return (
		<div className='grid grid-cols-2 gap-2 lg:grid-cols-3 place-items-center '>
			{actionList.map(({ action, href }, i) => {
				return (
					<Link
						key={i}
						href={href}
						onClick={() => {
							if (href == '') signOut();
						}}>
						<Card name={action} />
					</Link>
				);
			})}
		</div>
	);
};

export default Links;
