            #language: pt

            Funcionalidade: Calculadora
            Como não sei fazer conta de cabeça
            Quero usar a Calculadora do sistema
            Para somar dois numeros

            Cenario: Soma de 2 numeros
            Dado que eu acesse a calculadora
            Quando eu somar 2 + 2
            Então o resultado deve ser 4

            Esquema do Cenario: Soma de 2 numeros
            Quando eu somar <numero> + <numero>
            Então o resultado deve ser <resultado>

            Exemplos:
            | Numero | Numero | resultado |
            | "1" | "1" | "2" |
            | "2" | "2" | "4" |
            | "Numero" | "Numero" | "resultado" |
            | "Numero" | "Numero" | "resultado" |
            | "Numero" | "Numero" | "resultado" |
            | "Numero" | "Numero" | "resultado" |



