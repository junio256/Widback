import { Header } from './components/Header'
import { CallButton } from './components/CallButton'
import { WidgetScreen } from './components/WidgetScreen'
import { InputScreen } from './components/InputScreen'
import { Advantages } from './components/Advantages'
import { Footer } from './components/Footer'
import { Feedget } from '@juniokoi/feedget'



export default function App() {
  return (
    <div className='bg-zinc-50 dark:bg-BGdark-900'>
      <Header />
      <CallButton />
      <Feedget />
      <WidgetScreen />
      <InputScreen />
      <Advantages />
      <Footer />
    </div>
  )

}

