import { BurgerDropDownMenuCategoryItemList } from "../BurgerDropDownMenuCategoryItem/BurgerDropDownMenuCategoryItem"

export const BurgerDropDownMenuCategoryList = ({ list }) => {
	return (
		<ul>
			{list.map((item, i) => (
				<li key={i} className='flex flex-col'>
					<span className='block text-sm text-dark-grey px-9 mt-[9px]'>
						{item.title}
					</span>
					<BurgerDropDownMenuCategoryItemList list={item.list} />
				</li>
			))}
		</ul>
	)
}
