            #language: pt
            #Exercicio 2 - [US-0002]
            Funcionalidade: Login na plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o login (autentificação) na plataforma
            Para visualizar meus pedidos

            Contexto:
            Dado que eu acesse a pagina de login da EBAC-SHOP

            Cenário: autentificação com dados validos
            Quando eu digitar o usuario "maria@example.com"
            E a senha "123@teste"
            Então devo ser redirecionado a tela de checkout

            Cenário:autentificação com email invalido
            Quando eu digitar o usuario "maria@example.com.br"
            E a senha "1233@teste"
            Então deve exibir uma mensagem de alerta "Usuário ou senha invalidos"

            Esquema do Cenario: autentificação com dados invalidos
            Quando eu digitar <usuario>
            E a <senha>
            Então deve exibir a <mensagem> de alerta 

            Exemplos:
            | usuario | senha | mensagem |
            |"maria@example.com"|"123@tes"| "Usuário ou senha invalidos"|
            |"maria|123@teste"|"123@te"|"Usuário ou senha invalidos"|
            |"joão.souza"|"32109"|"Usuário ou senha invalidos"|
            |"joão.souza@teste.com"|"32109"|"Usuário ou senha invalidos"|