
export const usernameInput= () => cy.xpath("//input[@id='user-name']")
export const passwordInput= () => cy.xpath("//input[@id='password']")
export const loginBtn= () => cy.xpath("//input[@id='login-button']")
export const userCheck= () => cy.xpath("//div[@id='login_credentials']")
export const passwordCheck= () => cy.xpath("//div[@class='login_password']")

export const loginUser = (username,password) => {

    usernameInput()
        .clear()
        .type(username)
    passwordInput()
        .clear()
        .type(password)
    userCheck()
        .should('contain', 'standard_user')
    passwordCheck()
        .should('contain', 'secret_sauce')
    loginBtn()
        .should('be.visible')
        .click()
    
}

