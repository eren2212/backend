'use client';
import React, { useEffect, useState } from 'react';
import { useAppStore } from '@/app/libs/store';
import { IResult, IResultQuestions } from '@/types/resultType';
import ItemEssential from './ItemEssential';

const Essentials = () => {
	const [essentialQuestions, setEssentialQuestions] = useState<
		IResultQuestions[]
	>([]);
	const { result } = useAppStore();

	useEffect(() => {
		if (result.questions) {
			const filteredQuestions = result.questions.filter(
				({ showOnAdminDashboard }) => showOnAdminDashboard
			);
			const sortedAndFilteredQuestions = filteredQuestions.sort(
				(a: any, b: any) => {
					if (a.question < b.question) {
						return -1;
					}
					if (a.question > b.question) {
						return 1;
					}
					return 0;
				}
			);
			setEssentialQuestions(sortedAndFilteredQuestions);
		}
	}, [result]);

	return (
		<div className='grid grid-cols-3 gap-6  2xl:mt-10 mx-4  text-center  '>
			{essentialQuestions.map(({ question, id, answer }) => (
				<ItemEssential key={id} question={question} answer={answer} />
			))}
		</div>
	);
};

export default Essentials;
