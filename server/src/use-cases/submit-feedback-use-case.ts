import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {

  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter,
  ) { }

  async execute(request: SubmitFeedbackUseCaseRequest) {

    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error('Type is required')
    }
    if (!comment) {
      throw new Error('Comment is required')
    }
    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div 
        style="
        font-family: Helvetica, Arial, sans-serif; 
        font-size: 1rem;
        background-color: #EFF2F8 ; 
        color:#161320; 
        border-radius: 16px; 
        -moz-box-shadow: -1px 1px 21px -2px rgba(0, 0, 0, 0.5);  
        -webkit-box-shadow: -1px 1px 21px -2px rgba(0, 0, 0, 0.5); 
        box-shadow: -1px 1px 21px -2px rgba(0, 0, 0, 0.5)
        ">`,


        `<h2>Um novo Feedback foi emitido!</h2>`,


        `<hr style="
        width: 1rem; 
        border: 0; 
        height: 2px; 
        border-radius: 4px; 
        background-color: #996DFF;
        ">`,


        `<p><strong>Tipo do feedback:</strong> ${type}</p>`,
        `<p><strong>Comentário:</strong> ${comment}</p>`,

        screenshot
          ?
          `<a target="_blank" href="${screenshot}">
          Abra a foto em <em>alta resolução</em> em uma nova guia.
          </a> <br> 
          <img style="max-width: 600px;" src="${screenshot}" />`
          :
          `Usuário não tirou nenhuma foto`,
        `</div>`
      ].join('\n')
    })
  }
}