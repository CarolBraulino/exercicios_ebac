            #language: pt

            Funcionalidade: Tela de login
            como aluno do portal EBAC
            Quero me autenticar
            Para visualizar minhas notas

            Contexto:
            Dado que eu acesse a pagina de autentificação do portal EBAC

            Cenário: Autenticação válida
            Quando eu digitar o usuário "joao@ebac.com.br"
            E a senha "senha@123"
            Então deve exibir uma mensagem de boas vindas "Olá João"

            Cenário: usuário inexistente
            Quando eu digitar o usuário "xxxyyyzzz@ebac.com.br"
            E a senha "senha@123"
            Então deve exibir uma mensagem de alerta: "usuário inexistente"

            Cenário: usuário com senha invalida
            Quando eu digitar usuário "joao@ebac.com.br"
            E a senha "1234@"
            Então deve exibir uma mensagem de alerta:""usuário ou senha invalidos"

            Esquema do Cenario: Autenticar multiplos usuários
            Quando eu digitar o <usuario>
            E a <senha>
            Então deve exibir a <mensagem> de sucesso

            Exemplos:
            | usuario            | senha       | mansagem   |
            | "joao@ebac.com.br" | "teste@123" | "Olá João" |
            | "maria@ebac.com.br" | "teste@123" | "Olá maria" |
            | "teste@ebac.com.br" | "teste@123" | "Olá teste" |
            

