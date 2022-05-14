import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Moon, MoonStars, Sun } from 'phosphor-react'

const Theme = document.documentElement.classList.contains('dark')
let InitialColorScheme: string

Theme ? InitialColorScheme = 'dark' : InitialColorScheme = 'light'


export function ThemeSwitcher() {
  const [enabled, setEnabled] = useState<true | false>(Theme)
  const [theme, setTheme] = useState(InitialColorScheme)
  console.log(enabled);


  const ChangeTheme = () => {

    enabled ? setTheme('dark') : setTheme('light')

    if (theme == 'light') {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'light'
      setTheme('dark')
    }
    if (theme == 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'dark'
      setTheme('light')
    }
  }

  return (
    <div
    >
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClickCapture={() => ChangeTheme()}
        className={`${enabled ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-gradient-to-r from-orange-300 to-pink-500'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-5 w-5 transform rounded-full transition-all`}
        >{enabled ? <Moon weight='fill' className='text-TextLight-100 w-5 h-5 pr-1' /> : <Sun weight='fill' className='text-red-900 w-5 h-5 pl-1' />}</span>
      </Switch>
    </div>
  )

}

