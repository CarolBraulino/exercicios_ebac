Feature: Carrinho
 Scenario: Verify if the product quantity was updated correctly
        Given I have added a product in the cart
        When  I change the quantity of the product in the cart
        Then  I must see the product updated correctly

Scenario: Verify if the product was removed correctly
        Given I have added a product in the cart
        When  I remove the product in the cart
        Then  I must see the product removed correctly
