<h1 align="center">Relações SQL</h1>

<div id= "top" align="center" ><img src="https://user-images.githubusercontent.com/94838711/162326286-5ac1d8b5-7302-4706-a78c-2eea76edf40a.jpg" width="500px"/>
</div>

<p align="center">
  <a href="#1">Exercício 01</a> &#xa0;|&#xa0; 
  <a href="#2">Exercício 02</a> &#xa0;|&#xa0; 
  <a href="#3">Exercício 03</a> 
</p>

<h2 id="1">✏️ Exercício 01</h2>
 
<p> A)  É a chave que permite a referência a registros vindos de outras tabelas.</p>
 
<p> B) CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment_text TEXT NOT NULL,
score FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Films(id)
);

INSERT INTO Rating (id, comment_text, score, movie_id)
VALUES (
"001",
"Ruim",
1,
"002"
);</p>
 
<p> C) Ocorreu um erro: 1452 pois não é possível fazer avaliação de um filme que não exista.</p>

<p> D) ALTER TABLE Movie DROP COLUMN avaliacao;</p>

<p> E) Ocorreu um erro: 1451 pois não tem como deletar um item que está relacionado com outra tabela.</p>

<h2 id="2">✏️ Exercício 02</h2>

<p>A) É uma tabela de elenco do filme, que possui uma coluna com id do filme e outra com o nome do ator. A mesma faz referência através de chave estrangeira entre a tabela de filmes e a tabela de atores.</p>

<p>B) INSERT INTO MovieCast (movie_id, actor_id) VALUE ("003", "001"), ("004", "007"), ("003", "002"), ("005", "007"), ("006", "004"), ("002", "001");</p>

<p>C) Ocorreu um erro: 1452 pois não é possível relacionar a tabela ao ator inexistente. </p>

<p>D) Ocorreu um erro: 1451 pois não tem como deletar um item que está relacionado com outra tabela. </p>

<h2 id="3">✏️ Exercício 03</h2>

<p>A) A query retorna duas tabelas (Rating e Movie). O operador ON é a condição para que a tabela de Movie se relacione com a tabela de Rating.</p>

<p>B) SELECT Movies.id, title, Rating.rate FROM Movies INNER JOIN Rating ON Movies.id = Rating.movie_id;</p>

