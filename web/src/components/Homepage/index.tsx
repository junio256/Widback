import * as React from "react"

import {Header} from './Header'
import {CallButton} from './CallButton'
import {WidgetScreen} from './WidgetScreen'
import {InputScreen} from './InputScreen'
import {Advantages} from './Advantages'
import {Footer} from './Footer'

export default function Homepage() {
    return (
        <>
        <div className='bg-zinc-50 dark:bg-BGdark-900'>
      <Header />
      <CallButton />
      <WidgetScreen />
      <InputScreen />
      <Advantages />
      <Footer />
    </div>
            </>
    )

}