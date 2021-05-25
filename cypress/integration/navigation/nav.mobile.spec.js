context('Nav Menus Mobile', () => {
    context('iphone-5 resolution', () => {
        beforeEach(() => {
            /**
             * Run these tests as if in a desktop browser,
             * with a 720p monitor
             */
            cy.viewport('iphone-5');
            cy.visit('/');
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

    context('iphone-xs resolution', () => {
        beforeEach(() => {
            /**
             * Run these tests as if in a desktop browser,
             * with a 720p monitor
             */
            cy.viewport('iphone-x');
            cy.visit('/');
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
})
