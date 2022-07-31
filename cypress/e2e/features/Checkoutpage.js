
export const formUrl = ()=> cy.url()
export const cancelBtn = ()=> cy.xpath("//button[@data-test='cancel']")
export const continueBtn = ()=> cy.xpath("//input[@data-test='continue']")
export const firstNameBox = ()=> cy.xpath("//input[@data-test='firstName']")
export const lastNameBox = ()=> cy.xpath("//input[@data-test='lastName']")
export const postalCode =()=> cy.xpath("//input[@data-test='postalCode']")

export const vaLidations = ()=> {

    formUrl()
        .should('include','/checkout-step-one.html')

    cancelBtn()
        .should('have.id','cancel')
        .and('be.visible')
                
    continueBtn()
        .should('have.class','submit-button btn btn_primary cart_button btn_action')
        .and('be.visible')

}

export const fillForm = (firstname,lastname,postalcode)=> {

    firstNameBox()
        .should('have.id','first-name')
        .clear()
        .type(firstname)

    lastNameBox()
        .should('have.class','input_error form_input')
        .clear()
        .type(lastname)

    postalCode()
        .clear()
        .type(postalcode)
}

export const submitForm = ()=> {

    continueBtn()
        .click()
}