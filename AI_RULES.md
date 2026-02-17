# AI Rules

Instructions for AI coding assistants working on this project.

## Project Overview
This project involves developing a classic Snake game using HTML5 Canvas and JavaScript, with a focus on implementing AI rules for automated gameplay. The game will be lightweight, interactive, and designed to run smoothly in web browsers without a database.

## Tech Stack & Conventions
Use HTML5 Canvas for rendering the game graphics and vanilla JavaScript for game logic and AI implementation.

## Code Style Rules
- Use ES6 syntax consistently throughout the JavaScript codebase.
- Declare all variables with 'let' or 'const' to ensure block scoping.
- Use arrow functions for callbacks and anonymous functions to maintain lexical 'this'.
- Organize code into modules using ES6 import/export syntax.
- Use camelCase for variable and function names, and PascalCase for class names.
- Ensure all functions have JSDoc comments describing their purpose and parameters.
- Limit line length to 80 characters for better readability.
- Use template literals for string concatenation instead of '+' operator.
- Always use '===' for comparison to avoid type coercion.
- Place opening curly braces on the same line as the statement.

## Architecture Rules
- Organize code into separate modules for game logic, AI logic, and UI components.
- Place all JavaScript files in a 'js' directory to keep the project structure clean.
- Use a single HTML file as the entry point for the application.
- Import modules using relative paths to maintain clarity and avoid errors.
- Keep the AI logic in a separate module to facilitate testing and updates.
- Ensure the game loop is centralized in a single module for easier control and debugging.

## Do's
- Implement the game loop using requestAnimationFrame for smooth animations.
- Use event listeners to handle user input for starting, pausing, and resetting the game.
- Develop the AI logic to prioritize avoiding collisions before seeking food.
- Ensure the game is responsive by using CSS media queries and flexible layouts.
- Keep the UI minimalistic to focus on gameplay and AI testing.
- Use clear and descriptive variable names to enhance code readability.
- Comment complex logic sections to aid understanding and maintenance.
- Test the game on multiple browsers to ensure compatibility.
- Log AI decisions to the console for debugging purposes.
- Maintain a consistent frame rate for a smooth gaming experience.

## Don'ts
- Do not use any external game engine libraries; rely solely on JavaScript and HTML5 Canvas.
- Avoid using global variables; encapsulate state within modules.
- Do not hardcode dimensions; use relative units to support responsive design.
- Avoid complex UI elements that detract from the core gameplay experience.
- Do not implement unnecessary features that could complicate the AI logic.
- Avoid using deprecated JavaScript features or syntax.
- Do not ignore browser compatibility issues; test on both desktop and mobile.
- Avoid inline styles in HTML; use CSS for all styling needs.
- Do not allow the AI to make random moves; ensure decisions are logical and goal-oriented.
- Avoid excessive DOM manipulation; keep updates efficient and minimal.

## Testing Guidelines
Use Jasmine for unit testing JavaScript functions, focusing on AI decision-making logic and game mechanics, with a goal of 80% test coverage.

## Dependencies Policy
No external dependencies are allowed; the project must rely solely on vanilla JavaScript and HTML5 Canvas.
