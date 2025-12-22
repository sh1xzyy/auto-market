'use client'

import { useState } from 'react'
import { BurgerDropDownMenuCategoryList } from '../BurgerDropDownCategoryList/BurgerDropDownCategoryList'
import { IoIosArrowDown } from 'react-icons/io'

export const BurgerNavMenuList = () => {
    const [openIndex, setOpenIndex] = useState(null)
    
  return (
    <nav>
                <ul className='flex flex-col'>
                    {burgerNavMenu.map((item, i) => (
                        <li
                className={clsx(
                    'flex flex-col justify-center border-b border-grey last:border-0',
                    openIndex === i && 'shadow-card'
                )}
                key={i}
            >
                <button
                    className='flex items-center justify-between h-[60px] px-[18px] w-full font-bold'
                    type='button'
                    onClick={() => setOpenIndex(prev => (prev === i ? null : i))}
                >
                    <span>{item.title}</span>
                    <IoIosArrowDown
                        className={clsx(
                            'fill-light-grey transition linear duration-300',
                            openIndex === i && 'rotate-180'
                        )}
                        size={16}
                    />
                </button>
                {openIndex === i && <BurgerDropDownMenuCategoryList list={item.list} />}
            </li>
                    ))}
                </ul>
            </nav>
  )
}
