import github from '../../../assets/BrandLogos/github.svg'
import linkedin from '../../../assets/BrandLogos/linkedin.svg'

export function Footer() {
  return (
    <div className="dark:bg-BG dark-500 m-auto flex flex-1 flex-col items-center">

      <hr className="border-0 w-full container rounded h-1 bg-gradient-to-r from-brand-500 via-[rgba(0,0,0,0)] to-brand-500 opacity-50l" />

      <div className="container flex flex-col  items-center  mt-5 mb-20">

        <h1 className="z-20 text-4xl font-source font-bold text-TextDark-900 dark:text-TextLight-100 leading-[4rem] text-center max-w-[27rem]">
            E tem muito mais por vir...
        </h1>
      </div>

      <div className="container  flex flex-row justify-evenly items-top w-full">

        <div id='footer' className='max-w-2xl pt-8 w-full flex flex-col items-center'>


          <h2 className='z-20 text-2xl font-source font-bold text-TextDark-900 dark:text-TextLight-100 leading-[4rem] text-center '>Me siga para ver mais projetos como este!</h2>



          <div className='pt-10 flex flex-row w-full gap-x-20 pb-5 justify-center items-center font-source font-bold text-TextDark-900 dark:text-TextLight-100'>

            <a target="_blank" href='src/components/Homepage/Footer'>
              <img className='inline bg-sky-700 rounded-xlg mx-2' src={linkedin} alt="" />
              <span>linkedIn</span>
            </a>

            <a target="_blank" href='https://github.com/Juniokoi'>
              <img className='inline bg-black rounded-xlg mx-2' src={github} alt="" />
              GitHub
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}