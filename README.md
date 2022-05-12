# Feedget- Um Widget de Feedback 💬

<div align="center">
<img src="https://user-images.githubusercontent.com/53125029/167943551-915cf9dc-e2e2-4beb-9a61-0a23079cac03.gif" alt="animated"/>
</div> <br><br>
Este projeto foi desenvolvido com o intuito de facilitar a coleta de feedbacks dos usuários, que em vez do usuário ter que enviar um email todo específico, basta clicar no widget no canto de sua tela e já abrira um menu de itens de tópicos que deseja tratar, tudo de maneira fácil e direta. <br><br>


> Este projeto está em fase experimental 🛠, então bugs podem ocorrer. 

## Índice: 🔗
* [Features](#Features)
* [Instalação](#Instalação)

## Preview (Demonstração)
Decidi criar **duas páginas** separadas, uma contendo uma landing page do projeto ( e se der certo, irei implementar o widget dentro dele) e outra apenas com o widget, para facilitar dar zoom e ver melhor todo o layout. 
* [Landing Page](https://feedget-landingpage.vercel.app/)
* [Apenas o Widget](https://feedget-widget-juniokoi.vercel.app/)
<img src="https://user-images.githubusercontent.com/53125029/167980064-8a4fd57b-8ae1-450b-b759-5dfa123e0361.gif" alt="animated" width=50% height=50%>
<!-- <img src="" width=50% height=50%> -->

## Features 🎉

### Paleta de cores reajustada! 
Enquanto o design da [@ilanamallak](https://www.linkedin.com/in/ilana-mallak/) é magnifico, tem um tópico que venho pensando que seria o de [não usar preto em temas escuros](https://www.jacksonsart.com/blog/2013/08/08/use-of-black-killing-your-colours/), por mais estranho que isso pareça, tem uma lógica, isso porque ao usar uma 
cor mais azulada em vez de cinza, da um destaque maior para as outras cores. <br>
<div align="center">
<img src="https://user-images.githubusercontent.com/53125029/167978774-ef4e06bf-b893-4879-8b15-c50068e131b8.png" width=50% height=50%>
                                                                                                                </div>

### ∙ Modo claro e escuro!
<div align="center">
<img src="https://user-images.githubusercontent.com/53125029/167977121-df8f838b-6b85-4adf-bd0e-afde1ce85c86.png" width=38% height=38%>   <img src="https://user-images.githubusercontent.com/53125029/167977126-f51a1194-424f-40a0-ad1e-6b0f749827e4.png" width=40% height=40%>
</div>
<br><br> Para habilitar a troca das cores, basta mudar a configuração de temas do seu sistema operacional, e então o widget irá mudar de cor automaticamente. 

(! Obs: A landing page também possui esse modo!)

### ∙ Email personalizado 📫
<div align="center">
<img src="https://user-images.githubusercontent.com/53125029/167916570-7d997e85-bc5e-48a9-b0c4-ab6f454396a6.png" alt="An email screenshot" width=50% height=50% />
</div>
<br><br>
A cada nova solicitação que o cliente enviar, o servidor irá receber um email notificando este envio, e foram adicionados estilos para tornar essa notificação mais fácil de ler e interpretar.

### Placeholder personalizado
Agora dependendo do menu que você está, o texto que aparece quando não há nenhum texto é diferente dependendo do contexto.<br><br>
<div align="center">
<img src="https://user-images.githubusercontent.com/53125029/167977904-2c7847a6-0b2b-40a2-bfa6-6c7b3a591ba9.gif" alt="animated" width=30% height=30%>
</div>

## Instalação WEB ⬇
Este projeto é Open Source e portanto você podê baixa-lo e modifica-lo como quiser, e para facilitar este processo foi disponibilizado todo o projeto para o NPM, logo se quiser adicionar ao seu projeto basta digitar o comando: 
```node
npm i @juniokoi/feedget
```
ou se utilizar yarn
```node
yarn add @juniokoi/feedget
```

E então basta importa-lo para dentro de alguma de suas páginas
