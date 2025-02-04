/* There are four types item essentials
 1- Kilo Hedefi
 2- Alerjiler
 3- Diyetler
 4- Ilaclar
*/

import alergyIcon from '@/public/icons/alergy.png';
import dietIcon from '@/public/icons/diet.png';
import drugIcon from '@/public/icons/drug.png';
import weightIcon from '@/public/icons/weight.png';
import femaleIcon from '@/public/icons/female.png';
import Image from 'next/image';

interface ItemEssentialProp {
	question: string;
	answer: string;
}

const ItemEssential = ({ question, answer }: ItemEssentialProp) => {
	return (
		<div className='flex flex-col overflow-hidden'>
			<div className='text-black font-bold'>
				{question.toLowerCase().includes('kilo') ? (
					<div className='flex items-center justify-center mb-4 gap-2'>
						<Image
							width={25}
							height={25}
							src={weightIcon}
							alt='weight'
						/>
						<p>Kilo Hedefi</p>
					</div>
				) : question.toLowerCase().includes('diyet') ? (
					<div className='flex items-center justify-center mb-4 gap-2 '>
						<Image width={25} height={25} src={dietIcon} alt='diet' />
						<p>Aktif Diyetler</p>
					</div>
				) : question.toLowerCase().includes('alerji') ? (
					<div className='flex items-center justify-center mb-4 gap-2'>
						<Image
							width={25}
							height={25}
							src={alergyIcon}
							alt='alergy'
						/>
						<p>Alerji Durumu</p>
					</div>
				) : question.toLowerCase().includes('ilaç') ? (
					<div className='flex items-center justify-center mb-4 gap-2'>
						<Image width={25} height={25} src={drugIcon} alt='drug' />
						<p>Kullandığı İlaç</p>
					</div>
				) : (
					<div className='flex items-center justify-center mb-4 gap-2'>
						<Image
							width={25}
							height={25}
							src={femaleIcon}
							alt='female'
						/>
						<p>Kadın Sağlığı</p>
					</div>
				)}{' '}
			</div>

			{answer.includes(',') ? (
				<div className='flex  justify-center items-center gap-2  flex-wrap '>
					{answer.split(',').map((x, index) => (
						<p
							key={index}
							className='text-black font-bold  rounded-lg p-2 text-sm inline-block bg-[#b0b973] whitespace-nowrap cursor-pointer '>
							{x}
						</p>
					))}
				</div>
			) : (
				<h1 className='text-amber-900 font-bold'>{answer}</h1>
			)}
		</div>
	);
};

export default ItemEssential;
