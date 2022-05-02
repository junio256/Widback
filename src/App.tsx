interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  // console.log(props.text);
  return <button>{props.text ?? 'Default'}</button>
}



function App() {
  return (
    <>
      <Button text="Olá" />
      <Button text="Enviar" />
      <Button />
    </>
  )
}

export default App
