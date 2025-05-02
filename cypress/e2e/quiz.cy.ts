describe('Quiz Component', ()=> {
    beforeEach( ()=> {
        cy.visit('/')
    });

    it('should start the quiz and and display the first question', () => {
        
        cy.get('button').contains('Start Quiz').click()
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });
    
    it('should answer questions and complete the quiz', ()=> {
        
        cy.get('button').contains('Start Quiz').click()
        for (let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
            
        }
        cy.get('alert-success').should('be.visible').and('contain', 'Your Score')
    });
    
    it('should start the quiz again after completion', ()=> {
        
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('Take New Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
     
    })


})