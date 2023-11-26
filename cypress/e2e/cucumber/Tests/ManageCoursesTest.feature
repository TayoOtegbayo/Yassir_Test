Feature: I want to enter a new course details

  Background: Login to the Website
    Given I login to the Website
      | username                  | validpassword |
      | anasir@citn.org       | Password2023@    |

 Scenario: Enter a new course details
    When I enter the course details
      | courseTitle           | courseCode |  courseUnit  | 
      | Test Management       | TM12       |  3           | 
    
    Then Validate the message after course creation

    Scenario: Filter the course details
    When I filter a course table
      | courseTitle           |  
      | Test Management       |
    
    Then Validate the filter of the course

    Scenario: Edit a course details
    When I edit a course in the table
      | courseTitle           |  
      | Test Management       |
    
    Then Verify the course edit in the table
      | courseTitle           |  
      | Test Management       |

    Scenario: Scroll a particular element to view
    When I scroll to the footer of the table
    Then Verify the entries in the table

    