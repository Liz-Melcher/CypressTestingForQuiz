describe('Quiz Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should start the quiz and display the first question', () => {
      cy.get('[data-cy="start-quiz-button"]').click();
      cy.get('.card').should('be.visible');
      cy.get('h2').should('not.be.empty');
    });
  
    it('should answer questions and complete the quiz', () => {
      cy.get('[data-cy="start-quiz-button"]').click();
  
      // Loop to answer 10 questions by clicking the first answer button
      for (let i = 0; i < 10; i++) {
        cy.get('[data-cy^="answer-button-"]').first().click();
      }
  
      cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
    });
  
    it('should start the quiz again after completion', () => {
      cy.get('[data-cy="start-quiz-button"]').click();
  
      for (let i = 0; i < 10; i++) {
        cy.get('[data-cy^="answer-button-"]').first().click();
      }
  
      cy.get('[data-cy="restart-quiz-button"]').click();
      cy.get('.card').should('be.visible');
      cy.get('h2').should('not.be.empty');
    });
  });
  