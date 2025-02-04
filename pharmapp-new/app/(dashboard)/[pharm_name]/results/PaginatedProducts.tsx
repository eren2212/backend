import { useAppStore } from '@/app/libs/store';
import React, { useState } from 'react';
import Product from './Product';
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const PaginatedProducts = ({ productPerPage }: any) => {
	const { result } = useAppStore();
	const [productOffset, setProductOffset] = useState(0);

	const endOffset = productOffset + productPerPage;
	const currentProducts = result.suggestedSupplements?.slice(
		productOffset,
		endOffset
	);
	const pageCount = Math.ceil(
		result.suggestedSupplements?.length! / productPerPage
	);

	const handlePageClick = (event: any) => {
		const newOffset =
			(event.selected * productPerPage) %
			result.suggestedSupplements?.length!;
		setProductOffset(newOffset);
	};

	return (
		<>
			<div className='flex items-center justify-center gap-2'>
				{currentProducts?.map(
					({ answer, question, supplement }, index) => (
						<Product
							key={index}
							supplement={supplement}
							answer={answer}
							question={question}
						/>
					)
				)}
			</div>

			<ReactPaginate
				breakLabel='...'
				nextLabel={
					<span className='w-5 h-5 flex items-center justify-center text-white  bg-[#b0b973]  rounded-md'>
						<BsChevronRight />
					</span>
				}
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				marginPagesDisplayed={2}
				pageCount={pageCount || 0}
				previousLabel={
					<span className='w-5 h-5 flex items-center justify-center text-white  bg-[#b0b973] rounded-md'>
						<BsChevronLeft />
					</span>
				}
				containerClassName='flex items-center justify-center gap-4 mt-4 mb-2'
				pageClassName='block transition p-1 rounded-md hover:bg-black cursor-pointer '
				renderOnZeroPageCount={null}
			/>
		</>
	);
};

export default PaginatedProducts;
