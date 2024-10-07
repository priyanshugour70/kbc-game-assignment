# KBC Game

Welcome to the KBC Game! This is a fun, interactive quiz game inspired by the popular Indian television show "Kaun Banega Crorepati". Players can enter their names and answer questions to test their knowledge.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [How to Run the Project](#how-to-run-the-project)
- [Folder Structure](#folder-structure)
- [Components Overview](#components-overview)
- [Questions Data](#questions-data)
- [Contributing](#contributing)
- [License](#license)

## Features

- Interactive quiz with multiple-choice questions.
- Players can enter their names and play the game.
- Provides feedback on answers (correct/incorrect).
- A clean and responsive UI designed using Tailwind CSS.
- QR Code generation for easy access to the player input page.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Declarative routing for React.js.
- **QRCode.react**: Library for generating QR codes.
- **react-icons**: Library for including icons easily.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/priyanshugour70/kbc-game-assignment.git
   cd kbc-game
   ```
2. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Create an `.env` File**
   In the root of the project, create a `.env` file and add the following line:
   ```
   REACT_APP_BASE_URL=http://localhost:3000
   ```

4. **Start the Development Server**
   ```bash
   npm start
   ```
   This will start the development server, and you can access the app at `http://localhost:3000`.

## How to Run the Project

1. **Access the Application**
   Open your web browser and navigate to `http://localhost:3000`.

2. **Play the Game**
   - On the home screen, scan the QR code or navigate to the player input page.
   - Enter your name and start the quiz by clicking on the "Start Quiz" button.
   - Answer the questions presented to you, and receive feedback on your answers.

## Folder Structure

```
kbc-game/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── PlayerInput.js
│   │   ├── Question.js
│   │   └── ResultDisplay.js
│   ├── questions.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── PlayerInputPage.js
│   │   └── QuizPage.js
│   ├── App.js
│   ├── index.js
│   └── tailwind.config.js
├── .env
├── package.json
└── README.md
```

## Components Overview

- **Navbar**: Displays the title of the game and creator information.
- **Footer**: Contains links to social profiles and contact information.
- **PlayerInput**: Input component for entering the player's name.
- **Question**: Renders the quiz question and multiple-choice options.
- **ResultDisplay**: Displays messages regarding the player's performance.

## Questions Data

The questions for the quiz are stored in `src/questions.js` in an array of objects. Each object contains the question, options, and the correct answer.

Example:
```javascript
export const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    answer: 'Paris',
  },
  ...
];
```

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

### Instructions for Use
- Replace the placeholder `yourusername` in the clone command with your actual GitHub username.
- Feel free to modify any section to better fit your project or personal preferences.

This `README.md` provides a clear overview of your project, its structure, features, and instructions to help users get started. If you have any additional features or sections you'd like to add, let me know!