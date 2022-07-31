
class LogoutPro {

    elements= {

        clickOptions: () => cy.xpath("//button[@id='react-burger-menu-btn']"),
        clickLogout: () => cy.xpath("//a[@id='logout_sidebar_link']"),
        verifyurl: () => cy.url()
    }

    logout() {
        this.elements.clickOptions().click();
        this.elements.clickLogout().click();    
    }


    checkurl(){
        this.elements.verifyurl().should('eq','https://www.saucedemo.com/')
    }

}

module.exports=new LogoutPro