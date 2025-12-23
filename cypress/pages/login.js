class login {
    selectors = {
        username: () => cy.get('input[placeholder="Enter your Username"]'),
        password: () => cy.get('input[placeholder="Enter your Password"]'),
        loginBtn: () => cy.get('.amplify-button--primary')
    }

    pageVerify(){
        this.selectors.loginBtn().should('be.visible');
    }

    loginUserType(username){
        this.selectors.username().type(username);
    }

    loginPasswordType(password){
        this.selectors.password().type(password);
    }

    clickLogin(){
        this.selectors.loginBtn().click();
    }
}
module.exports = new login();
