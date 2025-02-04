'use client';

import Input from '@/app/components/Input';
import { IGetResult, IResult } from '@/types/resultType';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchBarProps {
	results: IResult[];
	setFilteredResults: (filteredList: IResult[]) => void;
}

const SearchBar = ({
	results,
	setFilteredResults,
}: SearchBarProps) => {
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		const newResultsArray = results?.filter((result) =>
			result.name
				.toLocaleLowerCase()
				.includes(searchValue.toLocaleLowerCase())
		);
		setFilteredResults(newResultsArray);
	}, [searchValue]);

	return (
		<div className='flex justify-end items-end mr-10 mb-10 '>
			<Input
				id='search'
				label={`Sonuç ara `}
				className='max-w-[200px]  rounded-xl overflow-hidden '
				onChange={(e: any) => setSearchValue(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
