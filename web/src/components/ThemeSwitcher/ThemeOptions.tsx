import { Menu } from "@headlessui/react";
import { Desktop, Moon, Sun } from "phosphor-react";
import { useState } from "react";
const MoonIcon = <Moon weight="fill" />
const SunIcon = <Sun weight="fill" />

export function ThemeOptions() {
  let [theme, setTheme] = useState("") //Por padrão o tema é indefinido (ou seja, do sistema), tendo outras alternativas como dark e light


  function ChangeTheme(Theme: string) {
    if (Theme == 'light') {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }

    if (Theme == 'dark') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }

    if (Theme === 'remove') {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        console.log(document.documentElement.classList);
        setTheme('dark')
        return null
      } else {
        document.documentElement.classList.remove('dark')
        setTheme('light')
        console.log(document.documentElement.classList);

        return null
      }
    }
  }

  return (
    <Menu>
      <Menu.Button
        className={'dark:text-cyan-300 p-1'}>{theme.includes('light') ? SunIcon : MoonIcon}</Menu.Button>
      <Menu.Items
        className={'absolute left-24 flex flex-col mt-2 w-28 origin-right divide-y divide-gray-100 dark:divide-darkSurface-800  dark:text-darkText-100 rounded-md dark:shadow-md dark:shadow-brand-800 bg-white dark:bg-darkSurface-900 shadow-lg ring-1 ring-black dark:ring-darkSurface-100 ring-opacity-5  outline-none       '}>
        <Menu.Item>
          {({ active }) => (
            <button className='flex flex-row-reverse py-1 px-2 w-full justify-between rounded items-center hover:bg-lightSurface-400 dark:hover:bg-darkSurface-800' onClick={() => ChangeTheme("light")}>Claro {SunIcon} </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button className='flex flex-row-reverse py-1 px-2 w-full justify-between rounded items-center hover:bg-lightSurface-400 dark:hover:bg-darkSurface-800' onClick={() => ChangeTheme('dark')}>Escuro {MoonIcon}</button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button className='flex flex-row-reverse py-1 px-2 w-full justify-between rounded items-center hover:bg-lightSurface-400 dark:hover:bg-darkSurface-800' onClick={() => ChangeTheme('remove')} >Sistema <Desktop weight="fill" /></button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu >
  )
}