import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'



export function Feedget() {

  return (
    <Popover className='fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end font-inter'>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-darkText-100 flex items-center group'>
        <ChatTeardropDots className='w-6 h-6 -scale-x-100' />

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}