import React, { ReactNode } from 'react';

interface IContainer {
	children: ReactNode;
}

const Container = ({ children }: IContainer) => {
	return (
		<div className='max-w-[1200px] mx-auto h-full'>{children}</div>
	);
};

export default Container;
