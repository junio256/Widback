import { useState } from 'react'
import { Switch } from '@headlessui/react'
import roundCircle from '../assets/Components/roundCircle.svg'

// TODO: Animação de cores em Um e Zero
// TODO: Fazer o Entrar na wailist escalar quando hover.
// TODO: Colocar um botão para mudar o tema do site.

export function CallButton() {


  return (
    <>
      <div className='flex flex-1 flex-col  pt-48 justify-center items-center dark:text-TextLight-100 text-center mb-72'>


        {/* Titulo */}
        <div className='z-20 text-[4rem] text-TextDark-900 dark:text-TextLight-100 font-inter leading-[5rem]'>
          <h1><span className='font-bold '>Um</span> botão.<br />
            <span className='font-bold'>Zero</span> esforço.</h1>
        </div>

        {/* Chamada */}
        <div className='z-20 font-inter m-14 text-zinc-700 dark:text-TextLight-400 text-2xl'>
          <h2><strong>Ouça</strong> seus usuários de <strong>maneira</strong> <br />
            <strong> descomplicada </strong>com um simples widget que faz <br /> todo o trabalho por você!</h2>
        </div>

        <div className='z-20 emailInput flex font-inter' >

          <input className=' rounded-lg p-3 h-[4.5rem] w-3/4 placeholder:text-xl placeholder:font-source placeholder:text-slate-600 shadow-lg' placeholder=' Insira seu melhor email' type={'email'} />

          <button className='  rounded-lg  w-72 mx-2 shadow-lg px-2 text-xl font-source font-semibold bg-brand-500 hover:to-brand-300  hover:shadow-lg hover:shadow-violet-900  transition ease-in-out delay-100 hover:scale-105 '>
            Entrar na <em>waitlist</em>
          </button>

        </div>


        <img className='w-[42rem] absolute top-36 z-10 ' src={roundCircle} alt="" />


      </div>
    </>
  )
}
