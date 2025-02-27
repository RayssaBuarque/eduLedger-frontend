# EDULEDGER:

## Organização do Código

- `CÓDIGO DO FRONT NUM GERAL:` [pages](./eduledger-frontend/src/);
- `Páginas individuais da aplicação` [pages](./eduledger-frontend/src/pages/);
- `Componentes` [pages](./eduledger-frontend/src/components/);

## Como rodar

Basta executar no terminal:
```cd eduledger-frontend```
```npm run dev```

## Sobre as páginas:

As páginas atuais são um template da versão original do projeto em que nos inspiramos. Que deverão ser adaptadas de acordo com o que organizamos até agora.
> IDENTAÇÃO: Cada página criada deverá ter sua estrutura (.tsx) e sua estilização (.module.css) dentro de uma única pasta dentro do repositório de pages, recebendo todos o mesmo título, escrito com a letra inicial Maíuscula.

- [Home (página inicial)](./eduledger-frontend/src/pages/Home/);
- [Chat (chatbot)](./eduledger-frontend/src/pages/Chat/);
- [Discover (informativo)](./eduledger-frontend/src/pages/Discover/);

## Sobre as rotas:

Inicialmente, devemos ignorar a página de load ao executar o código, pois o log-in com a wallet depende da conclusão do back-end, que ainda está em desenvolvimento. Por isso, utilizem as rotas do localhost:

- /home : para acessar a tela inicial (que será transformada na tela de sequência de aprendizado )
- /discover : para acessar a tela de informações (que será transformada na telacom conteúdos educativos )
- /chat : para acessar a tela de Chat (em que será implementado o chatbot )