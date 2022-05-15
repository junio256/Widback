import { Menu, Transition } from "@headlessui/react";
import { Desktop, Moon, Sun } from "phosphor-react";
import { useState } from "react";
const MoonIcon = <Moon weight="fill" className="mx-2" />
const SunIcon = <Sun weight="fill" className="mx-2" />

const initialThemeScheme = document.documentElement.classList.contains('dark')


export function ThemeOptions() {
  const [theme, setTheme] = useState('system') //Por padrão o tema é indefinido (ou seja, do sistema), tendo outras alternativas como dark e light
  const [initialTheme, setInitialTheme] = useState(initialThemeScheme)

  function ChangeTheme(Theme: string) {
    if (Theme == 'light') {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }

    if (Theme == 'dark') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }

    if (Theme === 'system') {
      initialTheme ? ChangeTheme('dark') : ChangeTheme('light')
      setTheme('system')
    }
  }

  return (
    <Menu>
      <Menu.Button
        className={theme.includes('system') ? 'text-white' : 'text-violet-400'}>
        {theme.includes('light') ? SunIcon : MoonIcon}
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          className={`absolute left-5 -top-20 flex flex-col mt-2 w-28 origin-right divide-y divide-gray-100 dark:divide-darkSurface-800  dark:text-darkText-100 rounded-md dark:shadow-md dark:shadow-brand-800 bg-white dark:bg-darkSurface-900 shadow-lg outline-none`}
        >
          <Menu.Item>
            <button
              title="light"
              onClick={() => ChangeTheme("light")}
              className={`${theme.includes('light') && 'text-violet-500'} flex flex-row-reverse py-1 px-2 w-full justify-between rounded items-center hover:bg-lightSurface-400 dark:hover:bg-darkSurface-800`}>
              Claro {SunIcon}
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              title="dark"
              className={`${theme.includes('dark') && 'text-violet-500'} flex flex-row-reverse py-1 px-2 w-full justify-between rounded items-center hover:bg-lightSurface-400 dark:hover:bg-darkSurface-800`}
              onClick={() => ChangeTheme('dark')}>
              Escuro {MoonIcon}
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              title="system"
              className={`${theme.includes('system') && 'text-violet-500'} flex flex-row-reverse py-1 px-2 w-full justify-between rounded items-center hover:bg-lightSurface-400 dark:hover:bg-darkSurface-800`}
              onClick={() => ChangeTheme('system')} >
              Sistema <Desktop weight="fill" className="mx-2" />
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu >
  )
}