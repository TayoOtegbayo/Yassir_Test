Feature: I want to enter a new course details

  Background: This test the login and manage course of e-learning platform
    Given I login to the Website
      | username                  | validpassword |
      | anasir@citn.org       | Password2023@    |

 Scenario: Enter a new course details
    When I enter the course details
      | courseTitle           | courseCode |  courseUnit  | 
      | Test Automation       | TM12       |  3           | 
    
    Then Validate the message after course creation

    Scenario: Filter the course details
    When I filter a course table
      | courseTitle           |  
      | Test Automation        |
    
    Then Validate the filter of the course

    Scenario: Edit a course details
    When I edit a course in the table
      | courseTitle           |  
      | Testing               |
    
    Then Verify the course edit in the table
      | courseTitle           |  
      | Testing               |

    Scenario: Scroll a particular element to view
    When I scroll to the footer of the table
    Then Verify the entries in the table

    