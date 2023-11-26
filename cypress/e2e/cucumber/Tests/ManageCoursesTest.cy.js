/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import manageCourses from "../Pages/ManageCoursesPage.cy";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

beforeEach("", () => {
  Given("I login to the Website", (datatable) => {
    datatable.hashes().forEach((element) => {
      manageCourses.login(element.username, element.validpassword);
    });
  });
});
/*datatable.hashes().forEach((element) => {
      manageCourses.login(element.username, element.validpassword);
    });*/
When("I enter the course details", (datatable) => {
  datatable.hashes().forEach((element) => {
    manageCourses.clickManageCourse();
    manageCourses.clickAddNewCourse();
    manageCourses.enterNewCourseDetails(
      element.courseTitle,
      element.courseCode,
      element.courseUnit
    );
    manageCourses.saveCourse();
  });
});

Then("Validate the message after course creation", () => {
  if (manageCourses.alertMessage == "Added successfully") {
    manageCourses.clickManageCourse();
  } else {
    manageCourses.clickBack();
  }
});

When("I filter a course table", (datatable) => {
  datatable.hashes().forEach((element) => {
    manageCourses.filterCriteria(element.courseTitle);
  });
});

Then("Validate the filter of the course", () => {
  manageCourses.verifyFilter();
});

When("I edit a course in the table", (datatable) => {
  datatable.hashes().forEach((element) => {
    manageCourses.editCourseTitle(element.courseTitle);
  });
});

Then("Verify the course edit in the table", (datatable) => {
  datatable.hashes().forEach((element) => {
    if (manageCourses.alertMessage == "Updated successfully") {
      manageCourses.verifyEdit(element.courseTitle);
    } else {
      manageCourses.clickBack();
    }
  });
});

When("I scroll to the footer of the table", () => {
  manageCourses.scrollToView();
});

Then("Verify the entries in the table", () => {
  manageCourses.verifyScroll();
});
