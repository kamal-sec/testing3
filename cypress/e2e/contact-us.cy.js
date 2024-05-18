describe('contact us', () => {
    it('[1] enter all fields of contact us page', () => {
      cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })
  })
describe('contact us', () => {
    it.only('[1] enter all fields of contact us page', () => {
      cy.visit('https://www.webdriveruniversity.com/')
      cy.get('#contact-us').click()
    })
  })