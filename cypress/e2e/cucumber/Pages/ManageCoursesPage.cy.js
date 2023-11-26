class ManageCoursesPage {
  login(username, password) {
    cy.session("user session", () => {
      cy.log("**log in**");
      cy.visit("/");
      cy.get('input[name="username"]').type(username);
      cy.get('input[name="password"]').type(password);
      cy.get('[type="submit"]').eq(0).click();
      cy.url().should(
        "eq",
        "https://elearning.globalcollege.co.ke/lecturer/Dashboard/index"
      );
    });
    cy.visit("https://elearning.globalcollege.co.ke/lecturer/Dashboard/index");
    return this;
  }

  clickManageCourse() {
    return cy.get(":nth-child(6) > a").click();
  }
  clickAddNewCourse() {
    return cy.contains("Add Course").click();
  }
  enterNewCourseDetails(courseTitle, courseCode, courseUnit) {
    cy.get("#CourseTitle").type(courseTitle);
    cy.get("#CourseCode").type(courseCode);
    cy.get("#CourseUnit").type(courseUnit);
    cy.get("#DepartmentID").select("Test Dept").invoke("val").should("eq", "7");
    return this;
  }
  saveCourse() {
    return cy.get('button[type="submit"]').click();
  }
  alertMessage() {
    return cy.get(".alert");
  }
  verifySuccessMessage() {
    return cy.get(".alert").should("have.text", "Added successfully");
  }
  clickBack() {
    return cy.contains("Back").click();
  }

  filterCriteria(courseTitle) {
    cy.get(":nth-child(6) > a").click();
    cy.get('input[type="search"]').type(courseTitle);
    return this;
  }
  verifyFilter() {
    return cy.get("#dataTables-example").should("contain", "Test Management");
  }
  editCourseTitle(courseTitle) {
    cy.get(":nth-child(6) > a").click();
    cy.contains("Edit").eq(0).click();
    cy.url().should("contain", "Edit");
    cy.get("#CourseTitle").clear();
    cy.get("#CourseTitle").type(courseTitle);
    cy.get('button[type="submit"]').click();
    return this;
  }

  scrollToView() {
    cy.get(":nth-child(6) > a").click();
    cy.get("#dataTables-example_wrapper > :nth-child(3)")
      .scrollIntoView()
      .should("be.visible");
    return this;
  }
  verifyScroll() {
    return cy.get("#dataTables-example_info").should("contain", "entries");
  }
  verifyEdit(courseTitle) {
    cy.get(".col-sm-12").should("contain", courseTitle);
    cy.get(".alert").should("eq", "Updated successfully");
    return this;
  }
}
const manageCourses = new ManageCoursesPage();
export default manageCourses;
