Feature: I want to login into the site with valid data

  Background: Navigate to the Website
    Given I navigate to the Website

  Scenario: Login as new sign up user with valid data
    When I entered valid credential
      | email                  | validpassword |
      | anasir@citn.org       | Password2023@    |
    And User click on sign in button
    Then Validate the title after login

  Scenario: Login as new sign up user with invalid password
    When I entered invalid password credential
      | email                  | invalidpassword |
      | anasir@citn.org       | Password2023@4    |

    And User click on sign in button
    Then Validate the error message after login attempt

  Scenario: Login as a user with empty credentials
    When I did not enter any credential
     
    And User click on sign in button
    Then Validate the error messages after login attempt

  Scenario: Login as a user with empty password credentials
    When I did not enter any password credential
      | email                  |  |
      | anasir@citn.org       |     |

    And User click on sign in button
    Then Validate the password error messages after login attempt

