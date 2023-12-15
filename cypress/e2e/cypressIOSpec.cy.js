
describe('Test Suite for website cypress.io', () => {
 
  beforeEach(()=>{
     cy.visit('/#/');
  })

  it('User Scrolls To Get Weekly Downloads Number', () => {
      //scroll to the expected text
      cy.contains('Loved by OSS, trusted by Enterprise').scrollIntoView();
      // find the weekly download number by invoke method
      cy.get('main.grow > section:nth-child(4)  > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').invoke('text').then((downloadNumber) =>{
        cy.log("Weekly Download number is : ", downloadNumber);
        })
     });


  it('User Clicks On Company And Then On "About Cypress"', ()=>{
     // hover over Company using anchor tag data-cy attribute
    cy.get('a[data-cy="dropdown-company"]').trigger('mouseover');
    // assert that hover over text is "Company"
    cy.get('a[data-cy="dropdown-company"]').should('have.text', 'Company ');
     // finds "About Cypress" and clicks on it
    cy.get('div[data-cy="submenu"]').children().contains('About Cypress').click();
  })

  it('Users Installs "Cypress" And Validates npm command', ()=>{
    // force click the element because it has CSS property as display: none
    cy.get('button[data-cy="header-install"]').click({force : true });
    cy.get('button[data-cy="modal-install-copy"]').click();

    // trigger copy action of the text
    cy.get('button[data-cy="modal-install-copy"]').invoke('val', 'npm install cypress --save-dev').trigger('copy');
    cy.get('button[data-cy="modal-install-copy').focus().then(() => {
      // Verify that copied text matches the expected text
      cy.get('button[data-cy="modal-install-copy').should('have.value', 'npm install cypress --save-dev');
    })
  })

  it('User Clicks On “Product” And Then “Visual Review”', ()=>{
    // hover over product using anchor tag data-cy attribute
    cy.get('a[data-cy="dropdown-product"]').trigger('mouseover');
    // assert that hover over text is Product
    cy.get('a[data-cy="dropdown-product"]').should('have.text', 'Product ');
    // finds "Visual Reviews" and force clicks on it because it has CSS property as display: none
    cy.contains('[data-cy="submenu"] a', 'Visual Reviews').click({ force:true });
  })

  it('User Validates Green Circle Around Test Analytics', ()=>{
    // hover over product using anchor tag id attribute
    cy.get('a#dropdownProduct').trigger('mouseover');
    // assert that hover over text is Product
    cy.get('a#dropdownProduct').should('have.text', 'Product ');
    // cy.get('a#dropdownProduct').should('be.visible');
    cy.contains('[data-cy="submenu"] a', 'Smart Orchestration').click();
    // scroll to 'Test Analytics'
    cy.get('[id="test_analytics"]').scrollIntoView();

    // to verify transitioning green cirle exist and have text 'Test Analytics'
    cy.get('[data-cy="product-app"] a.text-teal-600').should('exist').and('have.text', 'Test Analytics');

  })

  
});