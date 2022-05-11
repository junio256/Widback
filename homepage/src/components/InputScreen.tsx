import ProblemScreenshot from '../assets/Screenshots/ProblemScreenshot.svg'

export function InputScreen() {
  return (
    <div className='flex md:justify-center md:flex-row sm:flex-col-reverse sm:gap-0 md:gap-32 md:items-center  h-auto mt-40'>

      <img className='scale-125 relative sm:m-auto md:m-0  max-w-fit top-10 max-h-[18rem]' src={ProblemScreenshot} alt="" />


      <div className='flex flex-col md:m-0 sm:m-auto md:items-end sm:items-center  md:text-right sm:text-center max-w-md sm:max-w-2xl'>

        <h1 className='text-4xl font-inter text-TextDark-900 dark:text-TextLight-100 mt-5 leading-[4rem]'><strong>Veja</strong> o que <br />realmente aconteceu</h1>

        <hr className='sm:invisible md:visible  border-0 mt-4 mb-12 h-1 rounded  min-w-full  bg-gradient-to-l from-purple-500 to-[rgba(0,0,0,0)] opacity-50' />

        <p className='text-slate-800 dark:text-TextLight-400 leading-[2rem] w-[32rem] md:text-right sm:text-center sm:pt-10 text-xl mb-10'>
          Com a nova funcionalidade de foto do ecrã, basta o usuário realizar um <u>click</u>! e pronto.<br />
          A foto da tela do usuário já estará dentro do formulário para você analisar o que realmente houve.<br />
          Menos dor de cabeça,<br /> e <strong>mais produtividade!</strong> </p>


      </div>
    </div>
  )
}