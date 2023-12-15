### NOTES:

In order to run this application on a local machine following steps need to be performed:


##### TO GET STARTED

1. Clone the repository on the machine
2. Ensure that "npm" is installed on to the machine 
3. Run "npm install" on command line
4. There are two ways to run cypress tests locally:
   - In Cypress Runner:
     -  on command line, write: "npx cypress open" , or
     -  on command line, write: "npm run open"
     -  cypress runner will open stating "Welcome To Cypress!"
     -  select "E2E Testing" out of the available two options
     -  select browser as "Chrome" and click "Start E2E Testing in Chrome"
     -  select the spec file "cypressIOSpec.cy.js". This will open the test suite and automatically start running all the five scripts:
       ☒ User Scrolls To Get Weekly Downloads Number 
       ☒ User Clicks On Company And Then On "About Cypress"
       ☒ Users Installs "Cypress" And Validates npm command
       ☒ User Clicks On “Product” And Then “Visual Review”
       ☒ User Validates Green Circle Around Test Analytics

   - In Headless Mode:
     - npx cypress run   
    
##### SCREENSHOTS AT ROOT LEVEL FOR SUCCESSFULL TEST SUITE RUN  
      ➢ Test Run in Cypress Runner.png
      ➢ Test Run in Headless Mode.png 
