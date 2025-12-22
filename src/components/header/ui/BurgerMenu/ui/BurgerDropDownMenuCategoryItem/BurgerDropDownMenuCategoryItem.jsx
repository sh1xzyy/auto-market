import clsx from 'clsx'
import Link from 'next/link'

export const BurgerDropDownMenuCategoryItemList = ({ list }) => {
	return (
		<ul>
			{list.map(({ src, icon, label, isNew }, i) => (
				<li key={i} className='border-b border-grey last:border-0'>
					<Link
						className={clsx(
							'leading-6 block font-medium py-[18px] pl-9 pr-[18px] focus:shadow-card',
							isNew && 'flex items-center gap-1'
						)}
						href={src}
					>
						<div className='flex items-center gap-[9px]'>
							<span className='block max-w-[185px]'>{icon}</span>
							<span className='block max-w-[185px]'>{label}</span>
							{isNew && (
								<span className='font-bold text-sm rounded-md px-1 py-0.5 bg-light-blue'>
									NEU
								</span>
							)}
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}
