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
    title: "Problema",
    image: {
      source: bugIMageUrl,
      alt: 'Ícone de um inseto',
      placeholder: "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaIMageUrl,
      alt: 'Ícone de uma lâmpada',
      placeholder: "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!"
    }
  },
  OTHER: {
    title: "Outros",
    image: {
      source: thoughtIMageUrl,
      alt: 'Ícone de uma nuvem',
      placeholder: "Queremos te ouvir. O que você gostaria de nos dizer? "
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
    <div className="bg-lightSurface-100 dark:bg-darkSurface-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg shadow-brand-800 w-[calc(100vw-2rem)] md:w-auto">
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
      <footer className="text-xs text-darkText-400">
        Feito com ♥ por <a className="underline underline-offset-2" target="_blank" href="https://github.com/juniokoi">Junio KOI</a> 
      </footer>
    </div>
  )
}