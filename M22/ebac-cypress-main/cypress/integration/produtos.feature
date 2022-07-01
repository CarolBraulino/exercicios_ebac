Feature: Produtos
    Scenario: Verify if the product was added correctly
        Given I access the product page
        When  I add a product in the cart
        Then  In the cart I must see the product
