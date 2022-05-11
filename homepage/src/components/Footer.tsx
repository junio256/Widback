import github from './../assets/BrandLogos/github.svg'
import linkedin from './../assets/BrandLogos/linkedin.svg'

export function Footer() {
  return (
    <div className="dark:bg-BGdark-500 m-auto flex flex-1 flex-col items-center">

      <hr className="border-0 w-full container rounded h-1 bg-gradient-to-r from-brand-500 via-[rgba(0,0,0,0)] to-brand-500 opacity-50l" />

      <div className="container flex flex-col items-center  mt-20">


        <h1 className="z-20 text-4xl font-source font-bold text-TextDark-900 dark:text-TextLight-100 leading-[4rem] text-center max-w-[27rem]">E tem muito mais por vir</h1>


        <h2 className="text-TextDark-900 dark:text-TextLight-100 leading-[2rem]  text-xl mb-10 font-source text-center mt-20">Esse projeto foi desenvolvido através de um projeto da <a className="font-medium text-brand-500" href="https://Rocketseat.com.br/">Rocketseat</a> chamado <strong>NLW</strong><br /> (Next Level Week) <br /> Todo o design e ideia são de autoria deste time incrível de profissionais,<br />
          <strong>muito obrigado!</strong>


        </h2>
      </div>

      <div className="container  flex flex-row justify-evenly items-top w-full">

        <div id='footer' className='max-w-2xl pt-8 w-full flex flex-col items-center'>


          <h2 className='z-20 text-2xl font-source font-bold text-TextDark-900 dark:text-TextLight-100 leading-[4rem] text-center '>Me siga para ver mais projetos como este!</h2>



          <div className='pt-10 flex flex-row w-full gap-x-20 pb-5 justify-center items-center font-source font-bold text-TextDark-900 dark:text-TextLight-100'>

            <a target="_blank" href='https://www.linkedin.com/in/junio-koi/'>
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