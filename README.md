# Cypress Testing Practice for a Working Quiz Application 

-[GitHub Repository](https://github.com/Liz-Melcher/CypressTestingForQuiz)

-[Video Walkthrough](https://youtu.be/YxtCB1wz3Bs)

-Deployed page: NA; deliverables include only the repo and the video for this project 


## Description
This project enhances a full-stack Tech Quiz application by adding Cypress component and end-to-end testing. Built with the MERN stack, the app lets users take a 10-question quiz and view their final score. The goal of this assignment is to strengthen reliability through comprehensive automated testing.

## Installation
This project came with working starter code for the quiz application itself.
To spin up the original code and play the quiz as written: 
```sh
NPM i
NPM run build
NPM run seed
NPM run start:dev
``` 

Cypress did come installed with the original dependencies but the testing library did not.
`npm install --save-dev @testing-library/cypress` 
To initialize Cypress, and scaffold the folder the package.json had to be updated with this information:
```sh
"scripts": {
  ...
  "cypress:open": "cypress open",
  "test": "cypress run",
  "test:comp": "cypress run --component"
}
```
 
Make sure there is a config file within Cypress:  
[tsconfig.json](/cypress/tsconfig.json)

And reads: 
```json
{
    "extends": "../tsconfig.json",
      "compilerOptions": {
        "target": "es5",
        "lib": ["es5", "dom"],
        "types": ["cypress", "node"],
        "jsx": "react-jsx"
      },
      "include": ["**/*.ts", "**/*.tsx"]
  }
  ``` 
The cypress.config.ts file should read:
```json
import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: 'http://127.0.0.1:3001',
  },
});
```

## License 
MIT License.

Original project instructions are here: 
# 19 Testing: Tech Quiz Test Suite, original instructions: 

## Your Task

Your assignment this week underscores the importance of ensuring reliability and robustness in modern web applications through comprehensive testing. In today's dynamic development environment, testing is not just an afterthought but a critical part of the development process that ensures applications meet user demands and perform efficiently under various conditions.

This week, you'll take the starter codebase of a fully functioning Tech Quiz application and enhance it by adding Cypress for both component and end-to-end tests. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It allows users to take a quiz of ten random questions and view their final score.

To complete the assignment, you’ll need to do the following:

1. Install Cypress as a dev dependency

2. Configure Cypress for both component and end-to-end testing

3. Create a component test for the quiz component

4. Create an end-to-test for the quiz component

## User Story

```md
AS AN aspiring developer
I WANT to take a tech quiz
SO THAT I can test my knowledge and improve my skills
```

## Acceptance Criteria

```md
GIVEN I am taking a tech quiz
WHEN I click the start button
THEN the quiz starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN all questions are answered
THEN the quiz is over
WHEN the quiz is over
THEN I can view my score
WHEN the quiz is over
THEN I can start a new quiz
```


## Mock-Up

The following animation demonstrates the application functionality:

![A GIF demonstrates a functioning quiz.](./Assets/19-testing-homework-demo.gif)

## Getting Started

This Challenge combines many of the skills we've covered so far. In addition to the user story and acceptance criteria, we’ve provided some guidelines to help you get started.

Because this Challenge requires a video submission, refer to the [Full-Stack Blog video submission guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for guidance on creating and sharing a video.

**Important**: You won't need to modify code for the existing application. In this challenge, you'll only be creating tests for the existing application.

Your testing should use [Cypress](https://docs.cypress.io/guides/overview/why-cypress) to run both the component tests and the end-to-end tests. The testing will be invoked using the following command:

```bash
npm run test
```

It's recommended that you start with a directory structure that looks like the following example:

```md
.
├── client/                 // the client application
├── cypress/                // Folder for Cypress
    ├── component/          // Folder for component tests
        └── Quiz.cy.jsx     // Component tests for the Quiz component
    ├── e2e/                // Folder for end-to-end tests
        └── quiz.cy.js      // End-to-end tests for the Tech Quiz
    ├── fixtures/           // Folder for test fixtures
        └── questions.json  // Mock data for testing
    └── tsconfig.json
├── server/                 // the server application
├── .gitignore
├── cypress.config.ts       // Runs the application using imports from lib/
├── package.json
├── tsconfig.json
└── README.md              // App description, link to video, setup and usage instructions           
```

**Note**: The server for this application requires environment variables to function properly. You'll need to rename the `.env.example` file to `.env`.

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it's considered incomplete and won't count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Deliverables: 15%

* Your GitHub repository must contain the application code as well as the configuration and tests using Cypress.

### Walkthrough Video: 32%

* A walkthrough video that demonstrates the component and end-to-end tests running and passing must be submitted.

* The `README.md` file must include a link to the walkthrough video.

* The walkthrough video must show all tests passing from the command line.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

### Technical Acceptance Criteria: 40%

* Your submission should satisfy all of the preceding acceptance criteria in addition to the following:

  * You must use the [Cypress package](https://www.npmjs.com/package/cypress).

  * The application must have a component test for the quiz component.

  * The application must have an end-to-end test for the quiz component.

### Repository Quality: 13%

* Your repository has a unique name.

* Your repository follows the best practices for file structure and naming conventions.

* Your repository follows the best practices for class/id naming conventions, indentation, quality comments, etc.

* Your repository contains multiple descriptive commit messages.

* Your repository contains a high-quality README with a description and a link to your walkthrough video.

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video that demonstrates the functionality of the application and the application successfully passing tests.

* The URL of your GitHub repository, which should have a unique name and include a README describing the project.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
