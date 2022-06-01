#language: pt
#Exercicio 1 - [US-0001]
Funcionalidade: Configurar produto
Como cliente da EBAC-SHOP
Quero configurar meu produto de acordo com meu tamanho e gosto
E escolher a quantidade
Para depois inserir no carrinho

Contexto:
Dado que eu acesse a pagina do produto desejado

Cenário: seleção com campos obrigatorios
Quando eu escolher o tamanho, cor e quantidade
E clicar no botão comprar
Então o produto deve aparecer no carrinho

Cenário: seleção com campos obrigatorios invalidos
Quando eu informar o tamanho
E não informar a cor
Então deve apresentar uma mensagem de alerta

Cenário: seleção do campo de quantidade
Quando informar a quantidade desejada
E ela passar de 10 itens
Então deve apresentar uma mensagem "somente é permitido 10 itens por produto"

Cenário:limpeza de seleção
Quando eu selecionar o tamanho, cor e quantidader
E clicar no botão "limpar"
Então deve voltar no estado original (sem preenchimento)



