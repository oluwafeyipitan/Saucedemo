
export const continueBtn = ()=> cy.xpath("//button[@data-test='continue-shopping']")
export const checkoutBtn = ()=> cy.xpath("//button[@data-test='checkout']")
export const QTY = ()=> cy.xpath("//div[text()='QTY']")
export const DESCRIPTION = ()=> cy.xpath("//div[text()='DESCRIPTION']")
export const removeProductfromCart = ()=> cy.xpath("//button[@data-test='remove-sauce-labs-fleece-jacket']")
export const otherOptions = ()=> cy.xpath("//button[@id='react-burger-menu-btn']")


export const Validations = ()=> {

    continueBtn()
        .should('include.text','Continue')

    checkoutBtn()
        .should('have.text','Checkout')

    QTY()
        .should('be.visible')
        .and('have.text','QTY')

    DESCRIPTION()
        .should('be.visible')
        .and('have.text','DESCRIPTION')

    otherOptions()
        .should('be.visible')
}

export const removeProduct = ()=> {

    removeProductfromCart()
        .should('have.text','Remove')
        .click()

}

export const checkout = ()=> {

    checkoutBtn()
        .click()
}