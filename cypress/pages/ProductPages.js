/// <reference types="cypress" />

export default{
//Locator
    btn_cart: "#shopping_cart_container",

    btn_add(nama) {
        return `#add-to-cart-sauce-labs-${nama}`},

    btn_remove(nama){
        return `#remove-sauce-labs-${nama}`},


//Action
    addToCart(nama){
        cy.get(this.btn_add(nama)).click()
    },

    removeCart(nama){
        cy.get(this.btn_remove(nama)).click()
    },

    cart(){
        cy.get(this.btn_cart).click()
    }
}