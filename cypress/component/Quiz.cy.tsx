// GIVEN I am taking a tech quiz
// WHEN I click the start button
// THEN the quiz starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN all questions are answered
// THEN the quiz is over
// WHEN the quiz is over
// THEN I can view my score
// WHEN the quiz is over
// THEN I can start a new quiz

//import React from 'react';



import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: 'api/questions/random',
      },
      {
        fixture: 'questions.json',
        statusCode: 200,
      }
    ).as('getRandomQuestion');
  });

  it('should start the quiz and display the first question', () => {
    mount(<Quiz />);
    cy.get('[data-cy="start-quiz-button"]').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });

  it('should answer questions and complete the quiz', () => {
    mount(<Quiz />);
    cy.get('[data-cy="start-quiz-button"]').click();

    // Loop through answer buttons for each question
    cy.fixture('questions.json').then((questions) => {
      questions.forEach(() => {
        cy.get('[data-cy^="answer-button-"]').first().click();
      });
    });

    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });

  it('should start the quiz again after completion', () => {
    mount(<Quiz />);
    cy.get('[data-cy="start-quiz-button"]').click();

    cy.fixture('questions.json').then((questions) => {
      questions.forEach(() => {
        cy.get('[data-cy^="answer-button-"]').first().click();
      });
    });

    cy.get('[data-cy="restart-quiz-button"]').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });
});
