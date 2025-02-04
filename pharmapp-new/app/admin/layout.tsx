import React, { ReactNode } from 'react';

interface ILayout {
	children: ReactNode;
}

const layout = ({ children }: ILayout) => {
	return (
		<div className='bg-main-bg bg-center bg-cover h-full'>
			<div className='bg-black/60 h-full overflow-hidden flex flex-col justify-center'>
				{children}
			</div>
		</div>
	);
};

export default layout;
