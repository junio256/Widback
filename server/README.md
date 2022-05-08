# SOLID

1. Single Responsibility Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

---

1. Cada classe tem uma  responsabilidade única;
2. As classes da aplicação devem ser abertas para extensão mas fechadas para modificação. 
3. Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando. ( as heranças devem acrescentar sobre o pai)
4. Não depender de muita coisa em uma só classe.
5. As ocorrências exteriores são que demonstram suas dependências.

---

Ao clonar o projeto para outro dispositivo e tentar fazer rodar o servidor, irá dar um erro pois não terá nenhum arquivo por padrão no .env, isso porque é lá que fica indicado onde que o servidor pode ser acessado publicamente e de modo privado (para ter maior segurança com os dados dos clientes), porém como este é um projeto de aprendizado não é necessário ser tão cuidadoso com a segurança, mas em casos gerais é necessário ser criado este dotenv e então aplicar as configurações que o Prisma solicita. Após criar o .env, basta colocar:
```
DATABASE_URL="file:./dev.db"
```
é necessário rodar o comando `npx prisma reset` ou `npx prisma generate` para que faça a reconfiguração do prisma e ele passa a redirecionar para o caminho URI certo. 

Agora basta digitar `npm run dev` e deve estar tudo certinho. 

### Como configurar nossa API para enviar a screenshot junto. 

1. Primeiro nós precisamos acessar a o arquivo [submit-feedback-use-case.ts](./src/use-cases/submit-feedback-use-case.ts) e 
2. então dentro da função `this.mailAdapter.sendMail(` vemos que apenas está sendo anexado o tipo de erro e o comentário, 
3. mas antes de simplesmente inserirmos uma nova linha e colocarmos `${screenshot}`, é necessário realizar uma condicional pois lembre-se: **o screenshot é opcional!**. 
4. logo, inserimos o seguinte: ` screenshot ? `${screenshot}` : ``, `, traduzindo: se possuir screenshot, insira ela aqui, caso contrário, coloque um espaço em branco.
5. Prontinho, agora é só realizar o deploy para o nosso servidor. 

Add something on Readme to check if doing a new push will resolve the website haha