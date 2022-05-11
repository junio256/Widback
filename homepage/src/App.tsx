import { Header } from './components/Header'
import { CallButton } from './components/CallButton'
import { WidgetScreen } from './components/WidgetScreen'
import { InputScreen } from './components/InputScreen'
import { Advantages } from './components/Advantages'
import { Footer } from './components/Footer'
import { Feedget } from '@juniokoi/feedget'


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

console.log(Feedget());

function App() {
  return (
    <div className='bg-zinc-50 dark:bg-BGdark-900'>
      <Header />
      <CallButton />
      <WidgetScreen />
      <InputScreen />
      <Advantages />
      <Footer />

    </div>
  )

}

export default App
