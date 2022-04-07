<h1 align="center">Banco de Dados e Introdução a SQL</h1>

<div id= "top" align="center" ><img src="https://user-images.githubusercontent.com/94838711/161637141-4dd38ea0-8c3b-47f9-96d3-23aad77cb207.jpg" width="600px"/>
</div>

<p align="center">
  <a href="#1">Exercício 01</a> &#xa0;|&#xa0; 
  <a href="#2">Exercício 02</a> &#xa0;|&#xa0; 
  <a href="#3">Exercício 03</a> &#xa0;|&#xa0;
  <a href="#4">Exercício 04</a> &#xa0;|&#xa0;
  <a href="#5">Exercício 05</a>  &#xa0;|&#xa0;
  <a href="#6">Exercício 06</a> &#xa0;|&#xa0;
  <a href="#7">Exercício 07</a> &#xa0;|&#xa0;
</p>

<h2 id="1">✏️ Exercício 01</h2>
 
<p> A) VARCHAR( ) - Utilizado para declarar strings de no máximo n caracteres (no caso da questão as strings terão no máximo 255 e 6 caracteres). DATE - Utilizado para declarar datas.</p>
 
<p> B) SHOW DATABASES - Serve para fazer a visualização mais rápida de diferentes bases de dados. SHOW TABLES - Mostrar as tabelas do banco de dados atual.</p>
 
<p> C) Mostra os nome e tipos de dados de cada coluna presente na tabela Actor.</p>

<h2 id="2">✏️ Exercício 02</h2>

<p>A) INSERT INTO Actor (id, name, salary, birth_date, gender) / 
VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female")</p>

<p>B) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' / Entrada duplicada para a chave PRIMARY '002'. O fato do id ser uma PRIMARY KEY não permite que haja mais de um item com o mesmo id. </p>

<p>C) Error Code: 1136. Column count doesn't match value count at row 1 / A contagem de colunas não corresponde à contagem de valores na linha 1. É preciso especificar valores para os itens, de acordo com as colunas especificadas, caso contrário não tem como ter correspondência entre as linhas e colunas.
  
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");

<p>D) Error Code: 1364. Field 'name' doesn't have a default value / Campo name não possui valor de default. Esse erro ocorre pois o campo name não foi especificado, com isso ele fica como NOT NULL não sendo possível criar um novo item. </p>

INSERT INTO Actor (id, salary, birth_date, gender, name)
VALUES ("004", 400000, "1949-04-18", "male", "Frances McDormand");

<p>E) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 /Valor de data incorreto na coluna birth_date. 
Os campos que são declarados como DATE devem receber valores em formado de strings "aaaa-mm-dd".
  
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("005", "Juliana Paes", 719333.33, "1979-03-26", "female");

<p>F) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Tom Hank",
  60000000.99,
  "1956-07-09", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Angelina Jolie",
  430000000.55,
  "1975-06-04", 
  "female"
);

<h2 id="3">✏️ Exercício 03</h2>

<p>A) SELECT * from Actor WHERE gender = "female";</p>

<p>B) SELECT salary from Actor WHERE name = "Tony Ramos";</p>

<p>C) SELECT * from Actor WHERE gender = "invalid";

Não foi possível retornar nenhum resultado pois não há item que possua gender como "invalid".</p>

<p>D) SELECT id, name, salary from Actor WHERE salary <= 500000;</p>
  
<p>E) Error Code: 1054. Unknown column 'nome' in 'field list' (código de erro: 1054. Coluna 'nome' não encontrada em 'field list'). O erro ocorreu porque o nome da coluna é "name" e não "nome". 

SELECT id, name from Actor WHERE id = "002";</p>

<h2 id="4">✏️ Exercício 04</h2>

<p>A) Nessa query o LIKE e o % são utilizados para pesquisar os nome que iniciem com A ou J e que o salário seja maior que 300000. </p>

<p>B) SELECT * FROM Actor
WHERE name LIKE "A%" AND salary > 350000;</p>

<p>C) SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";</p>

<p>D) SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%" ) AND (salary >= 350000 AND salary <= 900000);</p>
  
<h2 id="5">✏️ Exercício 05</h2>

INSERT INTO Movies (id, title, blurb, premiere, score)
</br>
VALUES
("001", 
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7),
</br>
</br>
("002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10),
</br>
</br>
("003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8),
</br>
</br>
("004",
"Minha Mãe É uma Peça",
"Dona Hermínia é uma mulher de meia idade, divorciada do marido, que a trocou por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina e Juliano, que já estão bem grandinhos.",
"2013-06-21",
10);

<h2 id="6">✏️ Exercício 06</h2>

<p>A) SELECT id, title, blurb FROM Movies WHERE id = "004";</p>

<p>B) SELECT * FROM Movies WHERE title = "Deus é Brasileiro";</p>
  
<p>C) SELECT id, title, blurb FROM Movies WHERE score >= 7;</p>

<h2 id="7">✏️ Exercício 07</h2>

<p>A) SELECT * FROM Movie
WHERE title LIKE "%vida%";</p>

<p>B) SELECT * FROM Movies WHERE title LIKE "%ano%" OR blurb LIKE "%avaliacao%";</p>

<p>C) SELECT * FROM Movies WHERE premiere < current_date();</p>

<p>D) SELECT * FROM Movies WHERE premiere < current_date() AND (title LIKE "%vida%" OR blurb LIKE "%ida%") AND score > 7;</p>

<a href="#top">Voltar para o topo 🔝</a>