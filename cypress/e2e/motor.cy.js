/// <reference types="cypress" />

describe('GDIC CI Motor test', () => {
  it('Logs in and navigates through the motor insurance module', function() {
    // Visit the login page
    cy.visit('https://cisqatest.green-delta.com/');

    // Perform login
    cy.get('.mb-5 > .input-group > .form-control').click().type('22222');
    cy.get(':nth-child(3) > .input-group > .form-control').click().type('UmmaHabiba1412');
    cy.get('#kt_login_signin_submit').click();

    // Wait for the login to complete and the page to load
    cy.wait(2000); // Consider using a more reliable way to wait, such as waiting for an element to be visible

    // Open the dropdown menu
    cy.get('.ng-select-container').click();

    // Select "AHO" from the dropdown menu
    cy.get('.ng-option').contains('AHO').click();

    // Verify the branch selection
    cy.get('.ng-select-container').should('contain', 'AHO');

    // Navigate to the motor insurance module
    cy.get(':nth-child(3) > .menu-toggle > .menu-arrow').click();
    cy.get('.menu-item-open > .menu-submenu > .menu-subnav > :nth-child(4) > .menu-link > .menu-text').click();
   // cy.screenshot();

    // Click on the buttons to proceed
    cy.get('.card-toolbar > .btn').click();
    cy.get('[style="align-items: center;"] > .btn').click();

    // Click the button again if necessary (this might be redundant)
    cy.get('[style="align-items: center;"] > .btn').click();

    // Open the customer type dropdown menu
    cy.get('ng-select[formcontrolname="customerType"]').click();
    //cy.screenshot()

    // Wait for the dropdown options to be visible and select "BUSINESS"
    cy.get('.ng-dropdown-panel .ng-option').contains('PERSONAL').click({ force: true });

    // Verify the selection
    cy.get('ng-select[formcontrolname="customerType"] .ng-value-container')
      .should('contain', 'PERSONAL');


    // Fill in the customer form fields (adjust selectors and inputs as necessary)
    cy.get('form.ng-untouched > #required-fields > :nth-child(2) > .input-group > .form-control').type('Test Business Customer');
    cy.get('form.ng-untouched > #required-fields > :nth-child(3) > .input-group > .form-control').type('123 Test Street, Test City');
    cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(5) > .input-group > .form-control').type('01878657890');
    cy.get(':nth-child(17) > .customer__edit__modal > .modal-content > app-add-customer-modal > .modal__control > .modal-body > .ng-invalid.ng-touched > #required-fields > :nth-child(16) > .input-group > .form-control').type('test@example.com');
    cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(8)').type('Munshigange')
    cy.get('.ng-invalid.ng-dirty > #required-fields > :nth-child(9) > .input-group > .form-control').type('3467829098')


    // Save the customer
    cy.get('form.ng-dirty > .modal-footer > .btn-primary').click();
    cy.get('.confirm__modal__content > .btn-primary').click()
    //cy.get('.confirm__modal__content > .btn').click()

    // Verify the customer was added (adjust based on your application's behavior)
    //cy.get('.notification-message').should('contain', 'Customer Created successfully');
    cy.get('form.ng-dirty > .modal-footer > .btn-light').click()

    //checking data:
    cy.get('.menu-item-active > .menu-link > .menu-text').click()
    cy.get('.card-toolbar > .btn').click()
    
  

   
  });
});
