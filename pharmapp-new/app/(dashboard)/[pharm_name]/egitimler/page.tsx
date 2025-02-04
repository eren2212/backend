import LottieLoader from '@/app/components/LottieLoader';
import React from 'react';
import animationData from '@/public/lotties/maintanence.json';

const page = () => {
	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<h1 className='animate-pulse'>Bakım Aşamasında...</h1>
			<LottieLoader animationData={animationData} />
		</div>
	);
};

export default page;
