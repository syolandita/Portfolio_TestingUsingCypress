/// <reference types="cypress" />

export default{
    btn_contShopping : '#continue-shopping',
    btn_checkout : '#checkout',
    fld_stName : '#first-name',
    fld_lsName : '#last-name',
    fld_postCode : '#postal-code',
    btn_continue : '#continue',
    btn_cancel : '#cancel',
    btn_finish : '#finish',
    btn_backToHome : '#back-to-products',
    btn_print : '#generate-pdf-order',

    checkout(){
        cy.get(this.btn_checkout).click()
    },

    continueShopping(){
        cy.get(this.btn_contShopping).click()
    },

    fillData(stname, lsname, code){
        cy.get(this.fld_stName).type(stname)
        cy.get(this.fld_lsName).type(lsname)
        cy.get(this.fld_postCode).type(code)
        cy.get(this.btn_continue).click()
        cy.get(this.btn_finish).click()
    }
}