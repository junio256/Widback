import InitialScreenshot from '../assets/Screenshots/InitialScreenshot.svg'


export function WidgetScreen() {
  return (
    <>
      {/* <img className='absolute w-[80vw]  -z-20' src={GradientTop} alt="" /> */}

      <div className='flex flex-1 w-auto justify-center items-center gap-80 font-source container mx-auto py-20'>

        <main className=' rounded-xl border-2 shadow-inner shadow-brand-500 border-brand-300 max-w-[30rem] p-8'>

          <h1 className='text-4xl font-inter dark:text-TextLight-100 mt-5 leading-[4rem]'>O que era complicado, nunca foi <strong>tão</strong> simples.</h1>

          <hr className='border-0 my-10 h-0.5 mx-36 bg-gradient-to-r from-[rgba(0,0,0,0)] via-brand-500 to-[rgba(0,0,0,0)]' />

          <p className='dark:text-TextLight-400 leading-[2rem] max-w-[23rem] text-xl mb-10'>Um widget que fica não atrapalha a navegação do usuário e ao mesmo tempo está fica em uma posição intuitiva e de fácil identificação para caso o cliente queira:</p>

          <ul className='dark:text-TextLight-400  list-disc p-4 text-xl leading-[2.5rem]'>
            <li>Reporter um problema existente</li>
            <li>Sugerir uma melhoria ou uma feature</li>
            <li>Ou um outro tópico</li>
          </ul>

        </main>

        <aside className='text-TextLight-100 rounded-lg  scale-125'>

          <img src={InitialScreenshot} alt="" />

        </aside>


      </div>
      {/* <img className='absolute  -z-20' src={GradientBottom} alt="" /> */}
    </>
  )
}