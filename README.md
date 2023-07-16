# iRent

iRent é um aplicativo de aluguel de propriedades, onde os usuários podem pesquisar, alugar e listar propriedades para aluguel.

## Sobre

O iRent é uma aplicação front-end criada com HTML, CSS, JavaScript e React, com o objetivo de permitir que os usuários aluguem propriedades, pesquisem propriedades para alugar ou listem suas próprias propriedades para aluguel. No back-end, estou utilizando o PHP + MySQL + framework Flight.

## Funcionalidades disponíveis já no MVP

- Cadastro Usuários
- Autenticação de Usuários
- Captcha meia boca mas que funciona e é validado no servidor
- Pesquisa dos imóveis com filtragem
- Paginação (Home, Contato, Sobre, Login)
- Breadcumbs (onde você está no momento)
- Visualização de detalhes da propriedade
- Mobile first 

## Planejado se for continuar o projeto:

- Reservas (planejado para versões futuras)
- Avaliações (planejado para versões futuras)

## Tecnologias utilizadas

### Front-end:

- HTML
- CSS
- JavaScript
- ReactJS (lib reativa de DOM virtual pra SPA's)
- React-Boostrap (lib de componentes baseada no Bootstrap)
- React-Icons (lib de icones em forma de componentes)

### Back-end:

- PHP 8
- MySQL
- Framework Flight (simples)
- Hopedagem compartilhada da Hostgator

## Como rodar o projeto
### Rodando na sua própria máquina 

1. Clone este repositório
2. Instale o NodeJS 
2. Instale as dependências com `npm install`
3. Inicie o servidor com `npm start`
4. Visite `http://localhost:3000` em seu navegador

### Versão já disponível na WEB
1. Digite no seu browser: https://irent.narede.app.br

### Usuario admin
    * Já exsite um usuario cadastrado: 
    * email: admin@teste.com
    * senha: 12345678

### MVP Análise:
- (2,0 pts) Componentização com o React;
    * Utilizados vários componentes.
---
- (1,0 pts) Devem ser utilizados recursos do react como hooks, props e states
    * Hooks, props, states foram amplamente utilizados
---
- (1,0 pts) Deve existir o reaproveitamento de pelo menos 3 componentes em pelo menos 2 páginas 
    * O componente **CartaoCetralizado** é utilizado em vários locais. Ele é totalmente parametrizável com "children"
    * O componente **Botao** é utilizado em todos os locais que precisam de um botão, ele é totalmente personalizavel. 
    * O componente **MostraImagem** é utilizado em 2 locais
    * O componente **MostraMensagem** é utilizado em 4 locais
    * Menu de opções em todas as páginas
    * etc
---

- (1,0 pts) Devem ser simuladas as chamadas a um servidor real. Ao invés de realizar a chamada, deve-se fazer a leitura de um JSON com o dado desejado.
    * Foi utilizado um servidor real com back feito em PHP
    * Foi utilizado **cabeçalhos CORS** para permitir o acesso via localhost
---
- Caso seja desenvolvida uma nova API será adicionado um ponto extra à nota final(nota que será limitada ao valor máximo de 10 pts).
    * Foi utilizado um servidor real com back feito em PHP
---
- (1,0 pts) Deve ser criado e hospedado no github um projeto público para o front-end.
    * O projeto está hospedo no git:
---    
- (1,0 pts) Deve ser criado um projeto público no Figma. O link do Figma deve ser adicionado também ao README.md do projeto do front no github.
    * https://www.figma.com/file/86lwQS1PpijPgFNZwcFllm/iRent?type=design&node-id=0%3A1&mode=design&t=ZuHe1iynkN5zHPhM-1
---
   
## Licença

[MIT](https://choosealicense.com/licenses/mit/)

