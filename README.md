<h1 align="center"> 👨‍💻✍️ Blogs API 👩‍💻✍️ </h1>

<br>

<h3 align="center">
O Blogs API é uma aplicação backend para um blog no formato de uma REST API, onde o usuário deverá logar para ver, adicionar, editar e deletar posts.<br/>
</h3>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias e bibliotecas:

- Docker
- Node
- MySQL
- Sequelize
- JWT (Json Web Token)
- Arquitetura de Software (MSC)

<br>

## 📑 Estrutura de pastas
<p>O projeto segue a seguinte estrutura de pastas:</p>

<ul>
  <li><strong>src:</strong> Código fonte da aplicação.</li>
  <li><strong>src/config:</strong> Setup de configuração do Sequelize.</li>
  <li><strong>src/migrations:</strong> Setup de criação das tabelas do banco de dados via Sequelize.</li>
  <li><strong>src/seeders:</strong> Setup de população das tabelas do banco de dados via Sequelize.</li>
  <li><strong>src/routes:</strong> Todas as rotas da aplicação seguindo a arquitetura model, service e controller (MSC).</li>
  <li><strong>src/utils:</strong> Todas as funções utilitárias para o funcionamento da aplicação.</li>
</ul>

<br>

## ⚙️ Como Usar

### Instalação

1. Clone o repositório:

```
git@github.com:davidcunhadev/Blogs-API.git
```

2. Vá para a pasta do projeto:

```
cd Blogs-API
```

3. Suba os containers do projeto com o comando:

```
docker-compose up -d --build
```

4. Em seu VSCode, utilizando a extensão <strong>Database Client</strong>, faça uma nova conexão <strong>MYSQL</strong>, apenas utilizando a palavra <strong>password</strong> como senha para conectar:
   
```
password
```

5. Acesse o container da aplicação com o comando:
   
```
docker exec -it blogs_api bash
```

6. Dentro do container, instale as dependências do projeto:
   
```
npm install
```

7. Após a conexão, para criar e popular o banco de dados rode o comando:
   
```
npm run prestart
```

8. Com isso a aplicação já estará no ar no <a href="http://localhost:3001/" target="_blank"> localhost:3001 </a>.

<br> 

## 🔀 Rotas da Aplicação

<strong>OBS</strong>: Todas as rotas da aplicação precisam de um token válido para serem acessadas, para isso começamos na rota <code>/login</code>.

<ul>
  <details>
    <summary><strong><code>/login</code></strong></summary>
    
  <li><h3>POST <code>/login</code></h3></li>
  <p>Esta rota possibilita o login de um usuário.</p>
  
  <h4>Parâmetros via Body</h4>
  <ul>
    <li>"email": Email do usuário.</li>
    <li>"password": Senha do usuário.</li>
  </ul>
  
  <h3>Exemplo de Requisição:</h3>
  
  <code>POST</code> <code>/login</code>
  
      {
        "email": "lewishamilton@gmail.com",
        "password": "123456"
      }    
  
  <h3>Exemplo de Resposta:</h3>
  
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImlhdCI6MTcwMzM1NTY2M30.Muxugxrr6EDYwwR5DIGLrJER_cfrVIgcU0ghamWpmFU"
      }
  </details>

<hr>

<details>
  <summary><strong><code>/user</code></strong></summary>
  
<li><h3>GET <code>/user</code></h3></li>
<p>Esta rota retorna a lista de todas as pessoas cadastradas no banco de dados.</p>

<h4>Parâmetros via Auth</h4>
Nos parâmetros via Auth, selecione Bearer e cole o token gerado anteriormente pelo <code>/login</code>.

<ul>
  <li>"Bearer Token": Use o token gerado anteriormente pelo <code>/login</code> e então faça a requisição.</li>
</ul>

<h3>Exemplo de Requisição:</h3>

<code>GET</code> <code>/user</code>

<br>

Token gerado anteriormente logo abaixo:

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImlhdCI6MTcwMzM1NzM2OH0.UH_M57y5IqYdyGoLWAyjQmgu93PXnyUAY86-R-0h8uI

<h3>Exemplo de Resposta:</h3>

    [
      {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      {
        "id": 2,
        "displayName": "Michael Schumacher",
        "email": "MichaelSchumacher@gmail.com",
        "image": "https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg"
      }
    ]

<br>
<hr>

<li><h3>GET <code>/user/:id</code></h3></li>
<p>Esta rota retorna uma única pessoa cadastrada no banco de dados.</p>

<h4>Parâmetros via Auth</h4>
Nos parâmetros via Auth, selecione Bearer e cole o token gerado anteriormente pelo <code>/login</code>.

<ul>
  <li>"Bearer Token": Use o token gerado anteriormente pelo <code>/login</code> e então faça a requisição.</li>
</ul>

<h3>Exemplo de Requisição:</h3>

<code>GET</code> <code>/user/:id</code>

<br>

Token gerado anteriormente logo abaixo:

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImlhdCI6MTcwMzM1NzM2OH0.UH_M57y5IqYdyGoLWAyjQmgu93PXnyUAY86-R-0h8uI

<h3>Exemplo de Resposta:</h3>

    {
      "id": 2,
      "displayName": "Michael Schumacher",
      "email": "MichaelSchumacher@gmail.com",
      "image": "https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg"
    }

<br>
<hr>

<li><h3>POST <code>/user</code></h3></li>
<p>Esta rota possibilita o cadastro de um novo usuário no banco de dados.</p>

<h4>Parâmetros via Body</h4>
<ul>
  <li>"displayName": Nome do usuário.</li>
  <li>"email": Email do usuário.</li>
  <li>"password": Senha do usuário.</li>
  <li>"image": Imagem do usuário. (a imagem não é obrigatória)</li>
</ul>

<h3>Exemplo de Requisição:</h3>

<code>POST</code> <code>/user</code>

    {
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com",
      "password": "123456",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
      // a imagem não é obrigatória
    }  

<h3>Exemplo de Resposta:</h3>

    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzAzMzU3MTMwfQ.Cs9-gAfi9oxMMlNeKRrqOnTRlqghMGF03CtP_tUyiPU"
    }
</details>

<hr>

<details>
  <summary><strong><code>/categories</code></strong></summary>
<li><h3>GET <code>/categories</code></h3></li>
<p>Esta rota retorna a lista de todas as categorias cadastradas no banco de dados.</p>

<h4>Parâmetros via Auth</h4>
Nos parâmetros via Auth, selecione Bearer e cole o token gerado anteriormente pelo <code>/login</code>.

<ul>
  <li>"Bearer Token": Use o token gerado anteriormente pelo <code>/login</code> e então faça a requisição.</li>
</ul>

<h3>Exemplo de Requisição:</h3>

<code>GET</code> <code>/categories</code>

<br>

Token gerado anteriormente logo abaixo:

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImlhdCI6MTcwMzM1NzM2OH0.UH_M57y5IqYdyGoLWAyjQmgu93PXnyUAY86-R-0h8uI

<h3>Exemplo de Resposta:</h3>

    [
      {
        "id": 1,
        "name": "Inovação"
      },
      {
        "id": 2,
        "name": "Escola"
      }
    ]

<br>
<hr>

<li><h3>GET <code>/categories/:id</code></h3></li>
<p>Esta rota retorna uma única categoria cadastrada no banco de dados.</p>

<h4>Parâmetros via Auth</h4>
Nos parâmetros via Auth, selecione Bearer e cole o token gerado anteriormente pelo <code>/login</code>.

<ul>
  <li>"Bearer Token": Use o token gerado anteriormente pelo <code>/login</code> e então faça a requisição.</li>
</ul>

<h3>Exemplo de Requisição:</h3>

<code>GET</code> <code>/categories/:id</code>

<br>

Token gerado anteriormente logo abaixo:

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImlhdCI6MTcwMzM1NzM2OH0.UH_M57y5IqYdyGoLWAyjQmgu93PXnyUAY86-R-0h8uI

<h3>Exemplo de Resposta:</h3>

    {
      "id": 1,
      "name": "Inovação"
    }

<br>
<hr>

<li><h3>POST <code>/categories</code></h3></li>
<p>Esta rota possibilita o cadastro de uma nova categoria no banco de dados.</p>

<h4>Parâmetros via Body</h4>
<ul>
  <li>"name": Nome da categoria.</li>
</ul>

<h3>Exemplo de Requisição:</h3>

<code>POST</code> <code>/categories</code>

    {
      "name": "Typescript"
    }

<h3>Exemplo de Resposta:</h3>

    {
      "id": 3,
      "name": "Typescript"
    }
</details>

<hr>

<details>
  <summary><strong><code>/post</code></strong></summary>

  <li><h3>GET <code>/post</code></h3></li>
  <p>Esta rota retorna a lista de todos os posts cadastrados no banco de dados.</p>
  
  <h4>Parâmetros via Auth</h4>
  Nos parâmetros via Auth, selecione Bearer e cole o token gerado anteriormente pelo <code>/login</code>.
  
  <ul>
    <li>"Bearer Token": Use o token gerado anteriormente pelo <code>/login</code> e então faça a requisição.</li>
  </ul>
  
  <h3>Exemplo de Requisição:</h3>
  
  <code>GET</code> <code>/post</code>
  
  <br>
  
  Token gerado anteriormente logo abaixo:
  
      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImlhdCI6MTcwMzM1NzM2OH0.UH_M57y5IqYdyGoLWAyjQmgu93PXnyUAY86-R-0h8uI
  
  <h3>Exemplo de Resposta:</h3>
  
    [
      {
        "id": 1,
        "title": "Post do Ano",
        "content": "Melhor post do ano",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 1,
            "name": "Inovação",
            "PostCategory": {
              "postId": 1,
              "categoryId": 1
            }
          }
        ]
      },
      {
        "id": 2,
        "title": "Vamos que vamos",
        "content": "Foguete não tem ré",
        "userId": 1,
        "published": "2011-08-01T19:58:00.000Z",
        "updated": "2011-08-01T19:58:51.000Z",
        "user": {
          "id": 1,
          "displayName": "Lewis Hamilton",
          "email": "lewishamilton@gmail.com",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
        },
        "categories": [
          {
            "id": 2,
            "name": "Escola",
            "PostCategory": {
              "postId": 2,
              "categoryId": 2
            }
          }
        ]
      }
    ]

<br>

  <li><h3>GET <code>/post/:id</code></h3></li>
  <p>Esta rota retorna um único post cadastrado no banco de dados.</p>
  
  <h4>Parâmetros via Auth</h4>
  Nos parâmetros via Auth, selecione Bearer e cole o token gerado anteriormente pelo <code>/login</code>.
  
  <ul>
    <li>"Bearer Token": Use o token gerado anteriormente pelo <code>/login</code> e então faça a requisição.</li>
  </ul>
  
  <h3>Exemplo de Requisição:</h3>
  
  <code>GET</code> <code>/post/:id</code>
  
  <br>
  
  Token gerado anteriormente logo abaixo:
  
      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImlhdCI6MTcwMzM1NzM2OH0.UH_M57y5IqYdyGoLWAyjQmgu93PXnyUAY86-R-0h8uI
  
  <h3>Exemplo de Resposta:</h3>
  
    {
      "id": 1,
      "title": "Post do Ano",
      "content": "Melhor post do ano",
      "userId": 1,
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.000Z",
      "user": {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
        {
          "id": 1,
          "name": "Inovação",
          "PostCategory": {
            "postId": 1,
            "categoryId": 1
          }
        }
      ]
    }

<br>

 <li><h3>POST <code>/post</code></h3></li>
  <p>Esta rota possibilita o cadastro de um novo post no banco de dados.</p>
  
  <h4>Parâmetros via Body</h4>
  <ul>
    <li>"title": Título do post.</li>
    <li>"content": Conteúdo do post.</li>
    <li>"categoryIds": ID's das categorias.</li>
  </ul>
  
  <h3>Exemplo de Requisição:</h3>
  
  <code>POST</code> <code>/post</code>
  
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "categoryIds": [1, 2]
    } 
  
  <h3>Exemplo de Resposta:</h3>
  
    {
      "id": 3,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 1,
      "published": "2023-12-23T19:20:46.892Z",
      "updated": "2023-12-23T19:20:46.892Z"
    }

  <br>

 <li><h3>PUT <code>/post/:id</code></h3></li>
  <p>Esta rota possibilita a atualização de um post no banco de dados.</p>
  
  <h4>Parâmetros via Body</h4>
  <ul>
    <li>"title": Título do post.</li>
    <li>"content": Conteúdo do post.</li>
  </ul>
  
  <h3>Exemplo de Requisição:</h3>
  
  <code>PUT</code> <code>/post</code>
  
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key"
    }
  
  <h3>Exemplo de Resposta:</h3>
  
    {
      "id": 1,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 1,
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.000Z",
      "user": {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
        {
          "id": 1,
          "name": "Inovação",
          "PostCategory": {
            "postId": 1,
            "categoryId": 1
          }
        }
      ]
    }

<br>

  <li><h3>DELETE <code>/post/:id</code></h3></li>
  <p>Esta rota possibilita deletar/excluir um post no banco de dados.</p>
    
  <h4>Parâmetros via Body</h4>
  <ul>
    <li>Nenhum parâmetro necessário.</li>
  </ul>
  
  <h3>Exemplo de Requisição:</h3>
  
  <code>DELETE</code> <code>/post</code>
  
     // Sem conteúdo no corpo da requisição
  
  <h3>Exemplo de Resposta:</h3>

     // Sem conteúdo no corpo da resposta
     // Deverá apenas retornar um status 204 No Content.
</details>

</ul>

<br>

## 📫 Contato

Sinta-se livre para dar feedbacks, entrar em contato comigo e se conectar para novas ideias quando quiser!  

<a href="mailto:contatodavidcunha@hotmail.com">
<img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white"></a>
</a>

<a target='_blank' href="https://www.linkedin.com/in/davidlcunha/">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
</a>
