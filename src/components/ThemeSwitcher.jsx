import { useCallback } from 'react'
import { useTheme } from 'next-themes'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const ThemeSwitcher = ({ className = '' }) => {
	const { resolvedTheme, setTheme } = useTheme()

	const toggleTheme = useCallback(() => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
	}, [resolvedTheme, setTheme])

	return (
		<button
			onClick={toggleTheme}
			className={`${className} rounded-full p-1 border-2 border-gray-300 bg-[#fff] w-[50px] dark:border-gray-800 text-gray-500 dark:text-gray-400`}
		>
			{resolvedTheme == 'light' ? <BsFillMoonFill size={20} /> : <BsFillSunFill size={20} />}
		</button>
	)
}

export default ThemeSwitcher
