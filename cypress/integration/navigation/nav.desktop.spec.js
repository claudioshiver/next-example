context('Nav Menus Desktop', () => {
    context('1280 resolution', () => {
        beforeEach(() => {
            /**
             * Run these tests as if in a desktop browser,
             * with a 720p monitor
             */
            cy.viewport(1280, 720)
            cy.visit('/')
        });

        it('Should navigate to Users page', () => {
            cy.dataCy('nav-users').click();
            cy.url().should('include', '/users')
        })

        it('Should navigate to Posts page', () => {
            cy.dataCy('nav-posts').click();
            cy.url().should('include', '/posts')
        })
    })
});
