import loginPage from '../pages/login.js'
import todo from '../pages/todo.js'

describe('SPA Login Persist', () => {
    let localStorageData;

    before(() => {
        cy.visit('/')
        loginPage.loginUserType("flavioteste")
        loginPage.loginPasswordType("teste123")
        loginPage.clickLogin()

        // Valida login
        cy.get('.sign-out').should('be.visible')

        // Salva localStorage
        cy.window().then(win => {
            localStorageData = { ...win.localStorage }
        })
    })

    beforeEach(() => {
        cy.visit('/')
        // Restaura localStorage manualmente
        cy.window().then(win => {
            Object.keys(localStorageData).forEach(key => {
                win.localStorage.setItem(key, localStorageData[key])
            })
        })
        cy.reload() // Recarrega a página com login restaurado
    })

    it('verify correct user', () => {
        todo.verifyWelcome("flavioteste")
    })

    it('add item list', () => {
        todo.createItem("001TEST cypress item FINAL", "0TEST cypress details")
    })

    it('verify added item list', () => {
        todo.verifyAddedItem("001TEST cypress item FINAL")
    })

    it('logout', () => {
        todo.signOut()
        loginPage.pageVerify()
    })
})
