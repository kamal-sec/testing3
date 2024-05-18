describe('button click', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
      });
    });
  
    it('[1] should display an alert for the first button click', () => {
      cy.visit('https://www.webdriveruniversity.com/Click-Buttons/index.html');
      cy.get('#button1').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Well done for successfully using the link!');
      });
    });
  
    it('[2] should display an alert for the second button click', () => {
      cy.visit('https://www.webdriveruniversity.com/Click-Buttons/index.html');
      cy.get('#button2').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('It is often beneficial to click on the element, before making the decision to perform another action.');
      });
    });
  
    it('[3] should display an alert for the third button click', () => {
      cy.visit('https://www.webdriveruniversity.com/Click-Buttons/index.html');
      cy.get('#button3').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Congratulations!');
      });
    });
  });
  