describe('login', () => {
    it('[1] should display an error for incorrect login details', () => {
      cy.visit('https://www.webdriveruniversity.com/Login-Portal/index.html');
      cy.get('#text').type('wrongUsername');
      cy.get('#password').type('wrongPassword');
      cy.get('#login-button').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('validation failed');
      });
    });
  
    it('[2] should successfully login with correct details', () => {
      cy.visit('https://www.webdriveruniversity.com/Login-Portal/index.html');
      cy.get('#text').type('webdriver');
      cy.get('#password').type('webdriver123');
      cy.get('#login-button').click();
     
    });
  
    it('[3] should display an error if username is left blank', () => {
      cy.visit('https://www.webdriveruniversity.com/Login-Portal/index.html');
      cy.get('#password').type('webdriver123');
      cy.get('#login-button').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('validation failed');
      });
    });
  
    it('[4] should display an error if password is left blank', () => {
      cy.visit('https://www.webdriveruniversity.com/Login-Portal/index.html');
      cy.get('#text').type('webdriver');
      cy.get('#login-button').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('validation failed');
      });
    });
  
    it('[5] should display an error if both fields are left blank', () => {
      cy.visit('https://www.webdriveruniversity.com/Login-Portal/index.html');
      cy.get('#login-button').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('validation failed');
      });
    });
  });
  