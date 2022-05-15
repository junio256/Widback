import { CloseButton } from "./../../CloseButton";
import imageSuccess from "../../../../assets/success.svg"
interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}


export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">

        <img src={imageSuccess} alt="Um quadrado verde com um check dentro" />

        <span className="text-xl text-center mt-2 text-lightText-900 dark:text-darkText-100">
          Estamos agradecidos pela sua contribuição!
        </span>

        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 text-lightText-900 dark:text-darkText-100  bg-lightSurface-600 dark:bg-darkSurface-900 rounded-md border-transparent text-sm leading-6 hover:bg-darkSurface-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-darkSurface-800 focus:ring-brand-500"
        >
          Quero enviar outro
        </button>

      </div>
    </>
  )
}