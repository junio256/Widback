import { Header } from './components/Header'
import { CallButton } from './components/CallButton'
import { WidgetScreen } from './components/WidgetScreen'
import { InputScreen } from './components/InputScreen'
import { Advantages } from './components/Advantages'
import { Footer } from './components/Footer'
import { ThemeSwitcher } from './components/ThemeSwitcher'



function App() {
  return (
    <div className='bg-zinc-50 dark:bg-BGdark-900'>
      <Header />
      <CallButton />
      <ThemeSwitcher />
      <WidgetScreen />
      <InputScreen />
      <Advantages />
      <Footer />

    </div>
  )

}

export default App
