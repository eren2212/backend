'use client';

import { useAppStore } from '@/app/libs/store';
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import Essentials from './Essentials';
import PaginatedProducts from './PaginatedProducts';

const CurrentResult = () => {
	const { isResultOpen, closeResult, result } = useAppStore();

	return (
		<div
			className={`absolute  h-full inset-0 bg-[#d3d3d3] transition duration-700 translate-x-[-100%] z-[99] ${
				isResultOpen && 'translate-x-[0%] '
			} `}>
			<div className='text-center my-10 text-amber-950 font-bold text-xl  '>
				<h1 className=' '>{`${result.name} için önerilen Vitaminler`}</h1>
			</div>
			<div className='mx-4'>
				<PaginatedProducts productPerPage={4} />
			</div>

			<Essentials />

			<button
				onClick={closeResult}
				className='border rounded-xl p-2 transition hover:scale-95 hover:shadow-md hover:bg-opacity-75 group absolute top-[5%] flex gap-2 items-center bg-amber-900'>
				<BsArrowLeft
					size={25}
					className='font-bold transition group-hover:text-black'
				/>
				<p>Geri</p>
			</button>
		</div>
	);
};

export default CurrentResult;
