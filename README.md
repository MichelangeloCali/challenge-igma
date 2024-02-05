# IGMA challenge

Esse foi o desafio proposto pela IGMA de desenvolvimento de uma página de acordo com o handoff realizado pela pessoa Product Design de sua Squad.

Você pode conferir o desafio deployado na Vercel

- [Link em Produção](https://igma-challenge.vercel.app/)

## O projeto foi desenvolvido com as seguintes stacks

- React JS (utilizou o Vite como compilador) 
- Typescript (para tipagem em tempo de desenvolvimento, visando boas práticas de código em legibilidade e manuntenibilidade).
- SASS (utilizando o .scss como formatação de estilo e o padrão module, para encapsular estilos específicos de cada componente, evitando sobreposição de estilos). 
- React Hook Form
- Zod (para validação de formulário e tipagem integrada com Typescript)
- Husky (para utilização de hooks, automatizando o linter fix e leitura de testes unitários).
- Eslint.
- Prettier.
- Vitest (para testes unitários).
- React Testing Library (para manipular os components clients nos testes unitários).
- Auth0 (para login, autorização e autenticação, utilizando login social Google, GitHub, Microsoft e LinkedIn).
- Vercel (para deploy da aplicação e hospedagem).

## Design de Software (arquitetura frontend)

```
/public
/src
  └──/@types 
  └── /assets
  └── /components
  └── /services
  └── /styles
  └── /utils
  App.js
  App.module.scss
  App.spec.tsx
  main.js
```

## Para rodar localmente o repositório: 

- certifique-se que você tem instalado Node v.18 em sua máquina.
- clone o repositório em sua máquina `git clone https://github.com/MichelangeloCali/challenge-igma.git`
- entre na pasta do projeto e rode `npm install`
- rode o comando `npm run dev`


## Boas práticas:

- O código foi a todo momento desenvolvido para que pudesse ser o máximo componentizado, tornando reutilizável e menos repetitido possível.
- Foi iniciado uma estrutura de testes unitários.
- O código Javascript está tipado, evitando erros de tipos em tempo de desenvolvimento, facilitando o debugger.
- Foi integrado um sistema de validação de inputs para que os dados possam ser tratados antes de salvos ou enviados no backend
- Na estilizacão, foi utilizado o padrão modules no .scss, para melhorar a manutenção e a escalabilidade do código CSS.
- Foi usado o mais novo motor de build para React, o Vite.
- O projeto foi deployado na Vercel.
- Foi configurando triggers com Husky, através de scripts pre-commit, onde é feito o fix do código, e pre-push, onde é rodado os testes unitários, evitando que todo e qualquer componente criado ou alterado suba para produção quebrado ou com algum bug. 

## Observações:

- Foi instalado Vitest e React Testing Library com a intenção de realizar testes unitários no App.tsx, no Button.tsx e no Input.tsx. Porém, infelizmente por falta de tempo, não foi realizado 100% da cobertura nesses componentes.
- Ao realizar o cadastro na Newsletter, os dados do Usuário são tratados, validados e em seguida, armazenado num state em memória, podendo ser utilizado para ou enviar para um Service que se comunica um alguma API de Mail (Sendgrid, Mailersend...) ou então serem salvos em algum Banco de Dados.
- Foi integrado um Auth0 para um pequeno sistema de Login, o intuito foi deixar pronto esse sistema e no futuro, isolar em módulo, protegendo a aplicação caso um dia precise. Além disso, tornou-se dinâmica a captura de foto do usuário para a imagem do perfil, utilizando o Login Social dele.

## O que poderia ser melhorado:

- Caso houvesse mais tempo, poderia ser melhorado a cobertura de testes unitários e implementação de teste E2E para simular cadastro na Newsletter e Login.
- Teria implementado um sistema de login mais robusto e personalizado com estilo do design system do projeto.


### Contato do desenvolvedor:

- [LinkedIn](https://www.linkedin.com/in/michelangelocali/)
- Email: michelangelocali@hotmail.com

