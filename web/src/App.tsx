import {Widback} from "./components/Feedget"
import Homepage from "./components/Homepage";


if (localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

export function App() {

    return (
        <>
        <Homepage />
        <Widback />
    </>
    )
}