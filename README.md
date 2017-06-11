# HACK FEST

  A Prefeitura de joão Pessoa disponibiliza vários dados relacionados a gastos públicos em http://transparencia.joaopessoa.pb.gov.br/. Infelizmente não é oferecida uma API, mas eles disponibilizaram um dump do banco de dados, no qual foi baixo e foi explorado afim de obter informações relacionados as áreas da saúde, educação, esporte e entre outras. Com os dados em mãos foram criados infográficos com informações sobre o uso desses recursos, visando a geração de informações de fácil compreensão para os cidadões. Vale salientar que criamos uma API afim de disponibilizar esses dados de forma mais fácil para que futuros desenvolvedores posam criar aplicações com esses dados, que pode ser fácilmente acesada pelos links: [api/gastometro](http://51.15.137.60:8080/api/gastometro) e [api/area/categoria/ano](http://51.15.137.60:8080/api/area/saúde/2017) 

  ##### Lista da categoria
      administracao
      assistencia-social
      ciencia-e-tecnologia
      comunicacoes
      comercio-e-servicos
      cultura
      desporto-e-lazer
      direitos-da-cidadania
      educação
      encargos-especiais
      energia
      gestao-ambiental
      habitacao
      judiciaria
      previdencia-social
      saneamento
      saúde
      seguranca-publica
      trabalho
      transporte
      urbanismo

   ##### Anos acessíveis 
   A partir do ano 2009
   
*Exemplo* de link acessível http://51.15.137.60:8080/api/area/saude/2017


### Equipe: Minha cidade

       Abraão Állysson dos Santos Honório
       Elcius Ferreira Barbosa Junior 
       Josue de Paiva Bernadino
       Kevin Fernandes de Medeiros
       Marcos Henrique Alves da Silva 
       Victor Franco Vieira Lima
       
### Descrição:
  	A plataforma Minha Cidade possui versões Web e Mobile, que trazem a solução para o problema de visualização de gastos dos 
    municípios em áreas essenciais como: Saúde, Educação, Segurança, Esporte, Cultura e outras. Proporciona uma melhor visualização 
    dos dados financeiros, de forma interativa e de fácil compreensão, relacionados com cada uma dessas áreas essenciais. Este 
    fator é proporcionado por funcionalidades e dentre elas se descata uma chamada Gastômetro, que é capaz de informar uma previsão 
    em tempo real dos gastos que estão sendo realizados. Além disso, traz também curiosidades e comparações dos dados obtidos.



### Fontes
[1] - http://transparencia.joaopessoa.pb.gov.br/

[2] - http://www.joaopessoa.pb.gov.br/prefeito-entrega-512-moradias-populares-e-numero-de-familias-beneficiadas-com-casas-chega-a-2-700/

[3]- https://www.amazon.com.br/Livros-Infantil-Infantojuvenil/b?ie=UTF8&node=7844001011


repositorio do backend https://github.com/minha-cidade/backend/

# Back-end Minha Cidade em Golang
O back-end tem a função de expor a API que será usada pelo front-end web e
mobile do projeto Minha Cidade, desenvolvido na HackFest 2017. Usa como base
o banco de dados obtido do [Portal de Transparência de João Pessoa](http://transparencia.joaopessoa.pb.gov.br/),
administrado pela [Secretaria da Transparência Pública](http://www.joaopessoa.pb.gov.br/secretarias/setransp/).
A base de dados pode ser obtida na [página de download](http://transparencia.joaopessoa.pb.gov.br/download) (item *dados de despesas, receitas e entidades*)
do mesmo.

### Configuração
A configuração é dada através das seguintes **variáveis de ambiente**:

* MINHACIDADE_BACKEND_ADDRESS

  Define o endereço de binding do servidor. Usa o formato `<endereço>:<porta>`,
  ou apenas `:<porta>`.

  Ex.:

      export MINHACIDADE_BACKEND_ADDRESS=":8080"

* MINHACIDADE_BACKEND_DB_INFO

  Define as configurações de conexão com o banco de dados. Usa o formato descrito
  na [documentação do driver Postgres usado](https://godoc.org/github.com/lib/pq#hdr-Connection_String_Parameters).

  Ex.:

      export MINHACIDADE_BACKEND_DB_INFO="host=127.0.0.1 port=5432 user=admin password=senha dbname=transparencia sslmode=disable"

## Instalação

### Docker

    $ docker build -t backend .

#### Execução

    $ docker run -it --rm --name backend -p 8080:8080 backend

### Manual

    $ go install github.com/minha-cidade/backend

#### Execução

    $ backend
