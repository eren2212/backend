'use client';
import { IResult } from '@/types/resultType';
import React, { useState } from 'react';
import Card from '@/app/components/Card';
import SearchBar from './SearchBar';

interface ResultListProps {
	results: IResult[];
}

const ResultList = ({ results }: ResultListProps) => {
	const [filteredResults, setFilteredResults] = useState<IResult[]>(
		[]
	);
	return (
		<div className='h-full'>
			<SearchBar
				results={results}
				setFilteredResults={setFilteredResults}
			/>
			<div className='grid grid-cols-3 gap-2  items-center  justify-items-center  '>
				{filteredResults.map(
					({
						id,
						name,
						questions,
						suggestedSupplements,
						showOnAdminDashboard,
					}) => (
						<Card
							key={id}
							id={id}
							name={name}
							questions={questions}
							suggestedSupplements={suggestedSupplements}
							showOnAdminDashboard={showOnAdminDashboard}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default ResultList;
