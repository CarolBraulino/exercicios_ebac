#language: pt
#Exercicio 3 - [US-0003]
Funcionalidade: tela de cadastro
Como cliente da EBAC-SHOP
Quero concluir meu cadastro
Para finalizar minha compra 

Contexto: 
Dado que eu acesse a pagina de checkout

Cenário: cadastro valido  
Quando eu preencher todos os dados obrigatorios
E preencher com email valido 
Então devo finalizar meu cadastro com sucesso 

Cenário: cadastro invalido
Quando eu preencher todos os dados obrigatorios
E preencher com um email invalido 
Então deve aparecer uma mensagem de erro

Cenário: cadastro com campos vazios 
Quando eu preencher os dados deixando um campo em branco  
E tentar me cadastrar 
Então deve exibir uma mensagem de alerta 
