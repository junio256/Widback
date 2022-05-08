import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import { api } from "../../../lib/api";
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
  //[13] Vamos criar um estado usando useState(tenho que estudar mais sobre isso)
  //? Evite criar um estado muito genérico, tipo 'loading', pois fica difícil de identificar o que o estado está apontando.


  const feedbackTypeInfo = feedbackTypes[feedbackType]

  async function handleSubmitFeedback(event: FormEvent) { //[1] função que ao clicar em enviar, irá realizar o que está dentro
    event.preventDefault(); //[2] Para evitar que ao clicar em submit seja enviado para outra página, é colocado esta função no parâmetro event.
    //// console.log({
    ////   screenshot,
    ////   comment
    //// }) 
    //[3] Não será mais utilizado pois agora iremos começar a fazer um upload direto para o backend que criamos.
    setIsSendingFeedback(true); // * Ao iniciar agora o submit, o navegador passará a exibir uma animação de loading.
    // [14] Agora o que temos que fazer é passar isso como uma função para o botão de [enviar](15). 

    await api.post('/feedbacks', { //[4] Irá enviar os dados que estão abaixo
      type: feedbackType, //[5] A tipagem no type (que nesse caso seria BUG, IDEA e OTHERS) ela é definida pelo parâmetro feedbackType
      comment, //[6] comment também já foi definido pelo conteúdo da textArea
      screenshot, //[7]  também já definida pela função importada ScreenshotButton
    }) //[8] Como este é um processo mais demorado, é aplicado async await para fazer com que não trave o sistema.

    setIsSendingFeedback(false); // * Apesar de não ser necessário indicar que é necessário parar o de carregar, decidi colocar aqui. 
    //[9] Para ver se está tudo certinho, iremos abrir nossa aplicação e fazer um teste e enviar 
    onFeedbackSent();// TODO: Por enquanto não lembro do porque foi colocado isso kkkk
    //[11] E agora testado, vemos que por enquanto não há nenhuma tela de loading quando clicamos em ~enviar~
    //[12] e é isso que vou fazer [agora](13). 

  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >

          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
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
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-1  border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-offset-2  focus:outline-none focus:ring-offset-zinc-900 focus:ring-brand-500 px-4 py-2 resize-none scrollbar scrollbar-thumb-zinc-900 focus:ring-2 scrollbar-track-transparent scrollbar-thin "
          placeholder="Tell us with detail what is happening?"
          onChange={event => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            disabled={comment.length === 0 || isSendingFeedback} // [17] Agora o botão irá ficar opaco enquanto estiver carregando.  Porém notamos que não está sendo enviado a screenshot no nosso feedback, e para mudarmos isso teremos que ir para a pasta use-cases e no arquivo submit-feedback-use-case.ts no nosso backend ( pasta server )
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {/* [15] Agora iremos passar a função de carregamento ao clicar neste botão abaixo. */}
            {isSendingFeedback ? <Loading /> : `Send Feedback`}
            {/* [16] Agora sim, mostra que está carregando, mas seria bom desativar o botão enquanto envia para evitar que o usuário clique duas vezes e dê bug, então iremos passar isso para o [botão](17) */}
          </button>
        </footer>
      </form>
    </>
  )
}