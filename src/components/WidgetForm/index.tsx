import { CloseButton } from "../CloseButton";
import { useState } from "react";
import bugIMageUrl from '../../assets/bug.svg'
import ideaIMageUrl from '../../assets/idea.svg'
import thoughtIMageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Bug",
    image: {
      source: bugIMageUrl,
      alt: 'A inset image',
    }
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaIMageUrl,
      alt: 'A lamp image',
    }
  },
  OTHER: {
    title: "Other",
    image: {
      source: thoughtIMageUrl,
      alt: 'images of some clouds',
    }
  },
}
// Object.entries(feedbackTypes) =>
/*
  [
    ['BUG',{...}],
    ['IDEA',{...}],
    ['THOUGHTS',{...}],
  ]
*/

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )
          }
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com 💕 por <a className="underline underline-offset-2" target="_blank" href="https://github.com/juniokoi">Junio KOI</a>
      </footer>
    </div>
  )
}