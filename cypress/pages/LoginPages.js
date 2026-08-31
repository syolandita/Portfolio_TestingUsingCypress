/// <reference types="cypress" />
export default{

    fld_usn : '#user-name',
    fld_pass : '#password',
    btn_login : '#login-button',


login(username, password){
    cy.get(this.fld_usn).type(username)
    cy.get(this.fld_pass).type(password)
    cy.get(this.btn_login).click()
    cy.get('.title').should('have.text','Products')
    }
}