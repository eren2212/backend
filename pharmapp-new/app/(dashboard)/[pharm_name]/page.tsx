import React from 'react';

interface PageProps {
	params: {
		pharm_name: string;
	};
}

const Dashboard = async ({ params }: PageProps) => {
	const { pharm_name } = params;

	return (
		<div className=''>
			Hosgeldin {pharm_name},<p>Kalan sure:</p>
		</div>
	);
};

export default Dashboard;
