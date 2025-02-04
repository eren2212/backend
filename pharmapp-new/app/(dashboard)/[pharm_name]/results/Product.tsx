'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import supplementImg from '@/public/images/supplement.png';
import { BsCheck } from 'react-icons/bs';
import { supplementFeatures } from '@/app/supplementFeatures';
import { FiThumbsUp } from 'react-icons/fi';

interface IProduct {
	supplement: string;
	question: string;
	answer: string;
}

const Product = ({ supplement, question, answer }: IProduct) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='inline-block p-2  bg-[#f4f4f4]/60 shadow-md w-[260px] h-[310px]  lg:w-[300px] lg:h-[350px]  rounded-lg'>
			<div className='text-center'>
				<Image
					className='inline-block w-[50%]'
					src={supplementImg}
					alt='supplement'
				/>
				<h1 className='-mt-5 text-green-900 font-bold '>
					{supplement}
				</h1>
			</div>
			<div className='mt-2 h-[100px] overflow-y-auto flex flex-col  justify-center '>
				{supplementFeatures.map((feature, index) => {
					if (feature.name == supplement) {
						return feature.features.map((feature, index) => (
							<p
								key={index}
								className='flex  gap-1 text-gray-500 text-sm '>
								<BsCheck
									className='flex-shrink-0'
									color='green'
									size={25}
								/>
								{feature}
							</p>
						));
					} else return null;
				})}
			</div>
			<span className='block w-[90%] mx-auto mt-3 h-[1px]  bg-white rounded-2xl' />
			<div className='text-green-900 mt-4 flex gap-2 font-semibold'>
				<FiThumbsUp size={20} />

				<div className='text-sm'>
					<p>Size bu ürünü önerdik çünkü </p>
					<span
						className='text-slate-900 font-bold underline  cursor-pointer relative'
						onClick={() => setIsOpen(!isOpen)}>
						sorusuna
						<p
							className={`absolute  top-[100%] z-10 bg-green-900 rounded-xl w-[200px] transition text-base p-2 text-white ${
								!isOpen && 'hidden'
							}`}>
							{question}
							<span
								className=' absolute right-[3%]  top-0 transition hover:text-red-600'
								onClick={(e) => {
									e.stopPropagation();
									setIsOpen(false);
								}}>
								x
							</span>
						</p>
					</span>{' '}
					<span className='text-cyan-800 font-bold'>{answer}</span>{' '}
					cevabını verdiniz
				</div>
			</div>
		</div>
	);
};

export default Product;
