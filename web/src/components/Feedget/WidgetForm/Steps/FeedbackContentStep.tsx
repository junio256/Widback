import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import api from "../../../../lib/api";
import { CloseButton } from "../../CloseButton"
import { Loading } from "../loading";
import { ScreenshotButton } from "./ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);


  const feedbackTypeInfo = feedbackTypes[feedbackType]

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type:
      comment,
      screenshot,
    })

    setIsSendingFeedback(false);
    onFeedbackSent();

  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-lightText-900 dark:text-darkText-400 hover:text-lightText-600 dark:hover:text-darkText-100"
          onClick={onFeedbackRestartRequested}
        >

          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2  text-lightText-900 dark:text-darkText-100">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder:text-lightText-600 dark:placeholder-darkText-400 text-lightText-900 dark:text-darkText-100 border-1  border-darkSurface-700 bg-transparent rounded-md focus:border-brand-500 focus:ring-offset-2  focus:outline-none dark:focus:ring-offset-darkSurface-900 focus:ring-brand-500 px-4 py-2 resize-none  dark:scrollbar-thumb-darkSurface-900 focus:ring-2 scrollbar-track-transparent scrollbar-thin "
          placeholder={feedbackTypeInfo.image.placeholder}
          onChange={event => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            disabled={comment.length === 0 || isSendingFeedback}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : `Enviar Feedback`}
          </button>
        </footer>
      </form>
    </>
  )
}