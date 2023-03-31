import React from 'react'
import { ConnectWallet } from '@thirdweb-dev/react'
import { AiOutlineSearch} from 'react-icons/ai'
import ThemeSwitcher from './ThemeSwitcher'
import { useTheme } from 'next-themes'

const Header = () => {
    const { resolvedTheme } = useTheme()
  return (
    <div className='w-full flex items-center justify-between px-[40px] py-[40px]'>
        <div className='bg-white w-[60%] flex space-x-4 items-center py-2.5 h-12 px-4'>
        <AiOutlineSearch size={29} color="gray" />
         <input type='text' placeholder='Search' className='border-none focus:border-none outline-none px-3 py-2 bg-transparent w-full' />
        </div>

        <div className='flex items-end'>
          <ConnectWallet theme={resolvedTheme}/>
          <ThemeSwitcher />
        </div>
    </div>
  )
}

export default Header