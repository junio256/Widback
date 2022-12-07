import Tailwind from '../../../assets/BrandLogos/Tailwind.svg'
import ReactLogo from '../../../assets/BrandLogos/React.svg'
import PageIcon from '../../../assets/Icons/PageIcon.svg'
import Responsibility from '../../../assets/Icons/Responsibility.svg'
import Smartphone from '../../../assets/Icons/Smartphone.svg'


export function Advantages() {
  return (
    <div className=" flex flex-col mt-36 items-center " >
      <div className="flex flex-col items-center  dark:bg-gradient-to-t dark:from-BGdark-500 dark:to-BGdark-900 h-40  w-full">
        <h1 className="z-20 text-4xl font-inter font-regular text-TextDark-900 dark:text-TextLight-100 leading-[4rem] text-center max-w-[27rem]">
          Tudo o que você precisa, e <strong>muito</strong> mais.
        </h1>
      </div>
      <div className="dark:bg-BGdark-500 dark:text-TextDark w-full pt-10 sm:px-4 pb-32">
        <div id="advantagesDiv" className="mt-4 container  max-w-[70rem]  rounded-xl flex flex-row justify-center flex-wrap w-full">

          <button>
            <img src={Smartphone} alt="" />

            <span><em>Mobile First</em> design</span>
          </button>

          <button>
            <img src={ReactLogo} alt="" />
            <span> Construído em React</span>
          </button>

          <button>
            <img src={Tailwind} alt="" />

            <span> Tailwind framework</span>
          </button>

          <button>
            <img src={Responsibility} alt="" />
            <span> Totalmente responsivo</span>
          </button>

          <button>
            <img src={PageIcon} alt="" />
            <span> Rico em documentação</span>
          </button>
        </div>
      </div>

    </div>
  )
}