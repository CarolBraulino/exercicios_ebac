Feature: Minha Conta
    Scenario: Register New Account
        Given I have added a product in the cart
        When  I finish the order
        Then  I should see a message of success
       
