class todo {
    selectors = {
        welcome: () => 'h2',
        title: () => '#title',
        details: () => '#details',
        addBtn: () => 'button[type="submit"]',
        list: () => '.todo-list',
        signOutBtn: () => '.sign-out'
    }

    verifyWelcome(username) {
        cy.get(this.selectors.welcome()).should('contain.text', username);
    }

    createItem(title, details) {
        cy.get(this.selectors.title()).type(title);
        cy.get(this.selectors.details()).type(details);
        cy.get(this.selectors.addBtn()).click({ force: true });
    }

    verifyAddedItem(title) {
        cy.get( this.selectors.list()).should('contain.text', title);
    }

    signOut() {
        cy.get(this.selectors.signOutBtn()).click({ force: true });
    }

}
module.exports = new todo();
