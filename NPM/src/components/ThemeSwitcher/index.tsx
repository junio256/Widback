import { Popover, Transition } from '@headlessui/react'


import { GearSix } from "phosphor-react";
import { ThemeOptions } from './ThemeOptions';

export function ThemeSwitcher() {


  return (
    <Popover.Group>



      <Popover>

        <Popover.Button
        className={'absolute left-5 top-5'}
          title='Configuração'>
            
          <GearSix
            weight='bold'
            className=' text-lightText-900 hover:text-lightText-600 dark:text-darkText-400 dark:hover:text-darkText-100' />
        </Popover.Button>

        <Popover.Panel
          className={'absolute -top-14 -left-0 p-3 font-inter  text-lightText-900 bg-lightSurface-100 dark:bg-darkSurface-900 rounded-lg'}>
          <div className='flex flex-1 flex-row items-center'>
            <span
              className='text-lightText-900 dark:text-darkText-100'>Tema:</span> <ThemeOptions />
          </div>
        </Popover.Panel>


      </Popover>



    </Popover.Group >

  )
}