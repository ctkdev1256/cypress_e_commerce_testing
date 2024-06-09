
describe('Using variable, promises and closure', () => {
    
    it('Implementing variable, promises, closure', () => {
        cy.visit('https://askomdch.com/')

        // Click on element on page that contain Accessories, uses cypress commands and chaining
        cy.get("a[href*='product-category']").contains('Accessories').click()

        // Jquery approach
        cy.get('.woocommerce-products-header').find('h1')
        .contains('Accessories').then(($accessoriesText) => {
            const accessoriesText = $accessoriesText.text()
            expect(accessoriesText).to.contain('Accessories')
            cy.log("Found h1 heading with text: " + accessoriesText)

            // Embedded commands (Closure)
            cy.get('h1').then(getText => {
                cy.log(getText.text())
                cy.log(getText)
            })
        })
    });
});