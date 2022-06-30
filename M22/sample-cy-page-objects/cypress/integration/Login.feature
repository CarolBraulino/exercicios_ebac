Feature: Admin Panel
    Scenario Outline: Acess Admin Panel
    Given I visit EBAC Store
    When I log with user "<user>" and pass "<pass>"
    Then the admin dashboard page should be visible

    Examples:
        | user | pass |
        | gerente  | GD*peToHNJ1#c$sgk08EaYJQ |

    