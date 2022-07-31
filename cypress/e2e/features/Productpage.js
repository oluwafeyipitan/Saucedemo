
export const urlCheck = ()=> cy.url()
export const productsHeader = ()=> cy.xpath("//span[text()='Products']")
export const cartOption = ()=> cy.xpath("//a[@class='shopping_cart_link']")
export const sortOption = ()=> cy.xpath("//select[@data-test='product_sort_container']")
export const firstAddtoCart = ()=> cy.xpath("//button[@data-test='add-to-cart-sauce-labs-backpack']")
export const secondAddtoCart = ()=> cy.xpath("//button[@data-test='add-to-cart-sauce-labs-fleece-jacket']")
export const thirdAddtoCart = ()=> cy.xpath("//button[@data-test='add-to-cart-sauce-labs-bike-light']")
export const fourthAddtoCart = ()=> cy.xpath("//button[@data-test='add-to-cart-sauce-labs-onesie']") 
export const removefourthAddtoCart = ()=> cy.xpath("//button[@data-test='remove-sauce-labs-onesie']")
export const AddbacktoCart = ()=> cy.xpath("//button[@data-test='add-to-cart-sauce-labs-onesie']")

export const inventoryUrl = ()=> {
    cy.url()
        .should('eq','https://www.saucedemo.com/inventory.html')
}

export const OptionsCheck = ()=> {
    productsHeader()
        .should('be.visible')
        .and('contain.text', 'Products')
    cartOption()
        .should('be.visible')
    sortOption()
        .should('be.visible')
}

export const AddtoCart = () => {

    firstAddtoCart()
        .should('contain.text', 'Add to cart')
        .click()
    secondAddtoCart()
        .should('contain.text', 'Add to cart')
        .click()
    thirdAddtoCart()
        .should('contain.text', 'Add to cart')
        .click()
    fourthAddtoCart()
        .should('contain.text', 'Add to cart')
        .click()
    
    }

export const RemovefromCart = () => {

    removefourthAddtoCart()
        .should('have.text', 'Remove')
        .click()
    AddbacktoCart()
        .should('be.visible')
        .and('contain.text', 'Add to cart')

    }

export const GotoCart = () => {

    cartOption()
        .click()
}
