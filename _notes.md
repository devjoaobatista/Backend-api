## Estudar metodos HTTP

#post

#get

#delete

#put

## O que vou precisar usar:

#Express.json (é uma função, pesquisar sobre como usar)

#O usuário deve ter um ID, um nome, telefone e endereço. (O ID pode ser o indice do array)

#Adicionar itens no array

#No get tem que ter uma opção de retorna apenas um cadastro com o iD.

#O usuário que sofrer atualização não pode ter o ID alterado.


## Passos para adicionar o Lint e o Prettier no projeto:

* istale como dependência do desenvolvedor usando o código  "npm install eslint --save-dev" ou "npm install -D"

* Para iniciar Eslint, vamos utilizar o comando "npx eslint --init". (É possível também usar o comando "node_modules/.bin/eslint --init", porém no windowns pode apresentar erro de segurança se a execução de códigos do powerShell estiver como restrita.)

* Quando for iniciado ele fará uma série de perguntas sobre como você usará o eslint, responda-as conforme sua preferência. Minha recomendação para as seguintes perguntas é escolher as seguintes opções:

- Onde ele pergunta: Como você gostaria de usar o ESLint? Escolha:[To check syntax, find problems and enforce code style].

- Onde ele pergunta: Qual guia de estilo queremos utilizar? Escolha:[Use a popular style guide].

- Caso você esteja seguindo a minha sujestão, escolha opção [Airbnb].

- Onde ele perguta: Em qual formato você quer que o arquivo de configuração venha? Escolha: [JSON].

*crie um arquivo na raiz da pasta do projeto com o nome ".eslintignore" e adicione os seguintes comandos:

> /*.js
> node_modules
> dist

- esses comandos informam quais pastas e arquivos o eslint deve ignorar.

*Agora para instalar o Prettier e outras duas dependências que irão formatar o código baseado nas nossas regras do ESLint e também integrar o Prettier com o ESLint iremos escrever o seguinte comando "npm prettier eslint-config-prettier eslint-plugin-prettier -D".

> Se estiver usando a extensão do prettier, é recomendado desistala-la para não gerar conflito.

* Caso use o node.js para rodar os códigos,, dentro do arquivo ".eslintrc.json", dentro do objeto "env", mude o atributo "browser" para "node".

* Outra recomendação é adicionar dentro do objeto "rules" o seguinte atributo: ["no-console": "off"].

* Agora é só fechar o vscode e abir novamente

* É provável que você enfrente alguns problemas de conflito entre o ESLint e o tipo de quebra de linha no Windows. Para isso é recomendado instalar a extensão EditorConfig for VS Code. Com ela instalada, na pasta raiz dos nossos projetos podemos clicar com o botão direito do mouse e escolher a opção Generate .editorconfig

* Com tudo pronto basta executar o eslint no arquivo desejado. Supondo que seu arquivo se chama index,js e está dentro de uma pasta chamada src, você pode executar o comando "npx eslint src/index.js"

* Para corrigir automaticamente os arquivos basta escrever o comando informado informado acima e adicionar --fix. Usando o comando do exemplo anterior o código ficaria npx eslint src/index.js --fix.

Caso tenha outras dúvidas, entre o seguinte artigo pode ajudar: [https://matheusteixeirajs.medium.com/como-configurar-eslint-e-prettier-para-seus-projetos-em-react-nodejs-e-typescript-53a2c0b9f5d4]
