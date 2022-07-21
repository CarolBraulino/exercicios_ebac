Feature: Minha Conta
    Scenario: Register New Account
        Given I access the my account page
        When  I register in with email "<email>" and senha "<senha>"       
        And   I click to complete the adress details
        Then  I should see a message of success

        
