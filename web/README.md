# Feedget
A feedback widget project to implement on various websites and mobile apps to get feedback in a very easy way.


### Entendendo o useState

por padrão, o useState é definido com um certo padrão: (e obviamente não é o único)
```jsx
const [state, setState] = useState(boolean) 
```
Que indica que terá um estado a ser guardado, e ele pode ser definido por uma função (usando-o como parâmetro) ou também manualmente como setState(false || true), isso faz com que evitemos utilizar if else e tornar o nosso código menos propenso a erros (principalmente se for em grande escala com milhares de linhas de código) 
e podemos até mesmo manipular o state sem nem mesmo tocar nele, utilizando o setState pra fazer esta função, o que torna todo o processo bem mais maleável e dinâmico para se trabalhar. 

### Configurando nossa aplicação web para deploy.

O primeiro passo a se realizar para passar todo o nosso ambiente para um externo, é mudar o direcionamento da API para um ambiente diferente, já que este que estamos utilizando *(baseURL)* ele é mais voltado para servidores locais.
Então o que iremos fazer será buscar no [site da Vite](https://vitejs.dev/guide/env-and-mode.html) e ver como ele pode ler o [dotenv](https://github.com/motdotla/dotenv) e vemos que o Vite permite carregar arquivos para ambientes diversos como para o ambiente como um todo. 