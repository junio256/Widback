import feedgetLogo from './../assets/BrandLogos/feedgetLogo.svg'
import figma from './../assets/BrandLogos/figma.svg'
import github from './../assets/BrandLogos/github.svg'
import linkedin from './../assets/BrandLogos/linkedin.svg'


export function Header() {
  return (
    <>
      <div className='fixed top-0 z-50 m-auto w-screen flex  flex-col  justify-center bg-[rgba(255,255,255,0.95)] dark:bg-[rgba(22,19,32,0.95)]'>
        <div id="header" className="py-6 container mx-auto sm:mx-0 flex justify-between items-center px-28  ">


          <button
            className="text-TextDark-900 dark:text-TextLight-100 flex font-source font-bold pr-8 text-2xl">
            <img className='bg-brand-500 rounded-lg' src={feedgetLogo} alt="" />
            Feedget
          </button>


          <div className="text-zinc-800 dark:text-TextLight-400 text-lg font-source sm:hidden ">
            <a href="#" className="mr-14">Documentação</a>
            <a href="#" className="mr-16">Suporte</a>
            <a href="#" className="mr-20">Preços</a>
          </div>


          <div className="flex items-center shadow-md bg-brand-500 rounded-lg sm:hidden">
            <a target="_blank" href="https://github.com/Juniokoi/Feedget" ><img src={github} alt="" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/junio-koi/" ><img src={linkedin} alt="" /></a>
            <a target="_blank" href="https://www.figma.com/file/moizkhour2dYfNMdDZ3vqn/Feedget-Widget?node-id=333%3A1747" ><img src={figma} alt="" /></a>
          </div>
        </div>
        <hr className="border-0 h-0.5 bg-gradient-to-r from-[rgba(0,0,0,0)] via-brand-500 to-[rgba(0,0,0,0)] opacity-50" />
      </div>

    </>
  )
}