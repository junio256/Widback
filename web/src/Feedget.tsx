import { WidgetButton } from "./components/WidgetButton";

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}


export function Feedget() {
  return <WidgetButton />
}