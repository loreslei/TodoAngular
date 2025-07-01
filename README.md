# 📝 To-Do-List com Angular

Este é o guia para configurar e executar o projeto frontend da aplicação, construído com Angular.

## 📋 Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes requisitos instalados e configurados:

* **Backend**: O projeto [Back-Spring-Todo](https://github.com/loreslei/Back-Spring-Todo) deve estar instalado e em execução.
* **Node.js**: Essencial para o ambiente de execução.
* **Angular CLI**: A interface de linha de comando do Angular.
* **Git**: Para controle de versão.
* **Navegador Web**: Um navegador de sua preferência (ex: Chrome, Firefox, Opera, Brave).
* **IDE**: Um ambiente de desenvolvimento integrado (ex: VSCode, Webstorm).
* **Clarity**: Uma conta Clarity

---

## 🚀 Instalação e Execução Local

Para clonar e executar o projeto localmente, siga os passos abaixo no seu terminal ou prompt de comando.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/loreslei/TodoAngular.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd TodoAngular
    ```

3.  **(Opcional) Abra no VSCode:**
    Se você utiliza o Visual Studio Code, execute o comando abaixo para abrir o projeto. Caso contrário, abra-o em sua IDE de preferência.
    ```bash
    code .
    ```
--- 

## 💻 Servidor de Desenvolvimento

Siga os passos abaixo para instalar as dependências e iniciar a aplicação.

1.  **Instale as dependências:**
    No terminal, dentro da pasta do projeto, execute o comando para baixar todos os pacotes necessários.
    ```bash
    npm i
    ```

2.  **Inicie a aplicação:**
    Após a instalação, execute o seguinte comando para iniciar o servidor de desenvolvimento.
    ```bash
    ng serve
    ```

Assim que o servidor estiver no ar, abra seu navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você salvar uma alteração nos arquivos do projeto.

---

## 🛠️ Build do Projeto

Para compilar o projeto em uma versão otimizada para produção, execute:

```bash
ng build
```

Os arquivos resultantes do build serão armazenados no diretório dist/.

*Este projeto foi gerado com **Angular CLI** versão 19.2.8.*


## 🌐 Teste Rápido

Para uma demonstração prática e fácil, você deve primeiro se certificar que a API está carregada no endpoint público hospedado no Render, depois é só clicar na interface hospedada na Vercel e pronto!

* **URL de Produção:** [**https://back-spring-todo.onrender.com/api/tarefas**](https://back-spring-todo.onrender.com/api/tarefas)

* **URL Vercel:** [**https://todo-angular-sable-two.vercel.app/**](https://todo-angular-sable-two.vercel.app/)
