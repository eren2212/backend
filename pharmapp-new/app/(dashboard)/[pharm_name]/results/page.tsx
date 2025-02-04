import React from 'react';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getResults from '@/app/actions/getResults';
import CurrentResult from './CurrentResult';
import ResultList from './ResultList';

const Page = async () => {
	const user = await getCurrentUser();
	const results = await getResults(user?.id);

	return (
		<div className='h-full overflow-y-auto '>
			<ResultList results={results} />
			<CurrentResult />
		</div>
	);
};

export default Page;
