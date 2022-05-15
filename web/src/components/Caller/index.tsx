export function Caller() {
  return (
    <div className="container m-2">
      <h1> Olá! </h1>
      <p> Muito obrigado por ver meu projeto!</p>
      <p className="max-w-2xl"> Mais detalhes sobre o desenvolvimento podem ser encontrados em meu <a className="font-bold underline" target={'_blank'} href="https://github.com/Juniokoi/Feedget"> github</a> e também em uma landing page que criei especialmente par este projeto.</p>
      <img className="mt-10 rounded-3xl" src="https://user-images.githubusercontent.com/53125029/167980064-8a4fd57b-8ae1-450b-b759-5dfa123e0361.gif" alt="animated" height='50%' width='50%' />
      <p>link para a 	<a href="https://feedget-landingpage.vercel.app/"> → landing page</a></p>
    </div>
  )
}