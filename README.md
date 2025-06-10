# Curso Dev Fullstack Júnior +praTi & Codifica

Este repositório contém as **tarefas obrigatórias** e **opcionais** do curso **Dev Fullstack Júnior** da +praTi e Codifica.

## 📁 Estrutura de Pastas
O repositório divide os exercicios obrigatórios e os exercícios opcionais por pastas. As tarefas obrigatórias estarão dentro da pasta **tarefas_obrigatorias** e as tarefas opcionais dentro da pasta **tarefas_opcionais**.

Cada pasta **(como lista_de_exercícios_01, lista_de_exercícios_02, etc.)** corresponde a uma atividade solicitada durante o curso, podendo ser uma lista de exercícios ou um projeto específico.
Dentro de cada uma dessas pastas estão os exercícios individuais ou o conteúdo do projeto, organizados em subpastas nomeadas (como exercicio01, exercicio02, etc.).

A pasta `node_modules` na raiz do repositório contém todas as dependências. Dessa forma, todas as listas de exercícios e projetos acessam as mesmas dependências, evitando a necessidade de instalar pacotes em cada lista de exercício ou projeto.

Essa estrutura permite que cada exercício ou projeto utilize os pacotes instalados centralmente, mantendo o repositório mais leve e organizado.

```bash 
├── tarefas_obrigatorias/
│   ├── Lista_de_exercicios_01/      # Lista 1 de exercícios obrigatórios
│   │   ├── exercicio01/
│   │   ├── exercicio02/
│   │   ├── ...
│   │   └── exercicio15/
│   ├── Lista_de_exercicios_02/      # Lista 2 de exercícios obrigatórios
│   │   ├── exercicio01/
│   │   ├── exercicio02/
│   │   └── ...
│   └── Projeto_SistemaLogin/        # Projeto obrigatório completo
│       ├── index.js
│       ├── login.js
│       └── utils/
├── tarefas_opcionais/
│   └── Lista_de_exercicios_X/       # Exemplo de lista opcional, se houver
│       ├── exercicio01/
│       └── ...
├── node_modules/                    # Todas as dependências estão aqui
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

### Observação: dependendo da complexidade do projeto, ele pode estar em um repositório separado.

## ▶️ Como Executar os Exercícios

### 1. Clonar o Repositório
Primeiro, você precisa clonar este repositório para a sua máquina local. No terminal, execute o seguinte comando:

```bash
git clone https://github.com/fabricyovm/curso-fullstack-junior-codifica-prati.git
```

### 2. Instalar as Dependências

**Na raiz do repositório**, instale todas as dependências necessárias executando o comando:
```bash
npm install
```

### 3. Acessar a pasta de um exercício

Para acessar a pasta de um exercício, basta entrar no diretório correspondente. Por exemplo, para a `Lista_de_exercícios_01/exercicio05`:

```bash
cd lista_de_exercícios_01/exercicio05
```

### 4. Executar o código de um exercício

Para rodar o código do exercício desejado, basta executar o comando:

```bash
node script.js
```