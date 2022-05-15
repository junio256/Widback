import { Caller } from "./components/Caller"
import { Feedget } from "./components/Feedget"


if (localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

export function App() {

  return (
    <>
      <Caller />
      <Feedget />
    </>
  )
}