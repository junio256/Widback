import { FeedbackType, feedbackTypes } from '..'
import { CloseButton } from './../../CloseButton';
import { ThemeSwitcher } from './../../ThemeSwitcher';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}
/*  */

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <ThemeSwitcher />
        <span className="text-xl text-lightText-900  dark:text-darkText-100 leading-6">
          Deixe seu feedback
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-lightSurface-400 text-lightText-900 shadow-md dark:text-darkText-100 dark:bg-darkSurface-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2  border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none "
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}