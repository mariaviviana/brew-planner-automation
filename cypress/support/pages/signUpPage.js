export class SignUpPage {
  constructor() {
    this.inputApplicantName =
      "input[data-input-name='isPristineApplicantName']";
    this.inputApplicantEmail = "input[data-input-name='isPristineEmail']";
    this.inputAdminName = "input[data-input-name='isPristineUsername']";
    this.PasswordAdmin = "input[data-input-name='isPristinePasswordAdmin']";
    this.inputGuestName = "input[data-input-name='isPristineUsernameGuest']";
    this.PasswordGuest = "input[data-input-name='isPristinePasswordGuest']";
  }

  ingresarApplicantName(user) {
    cy.get(this.inputApplicantName).type(user);
  }

  ingresarApplicantEmail(email) {
    cy.get(this.inputApplicantEmail).type(email);
  }

  ingresarAdminName(user) {
    cy.get(this.inputAdminName).type(user);
  }

  ingresarPasswordAdmin(pass) {
    cy.get(this.PasswordAdmin).type(pass);
  }

  ingresarGuestName(name) {
    cy.get(this.inputGuestName).type(name);
  }

  ingresarPasswordGuest(pass) {
    cy.get(this.PasswordGuest).type(pass);
  }

  registerButtom() {
    cy.contains('Registrarse').click();
  }
}
