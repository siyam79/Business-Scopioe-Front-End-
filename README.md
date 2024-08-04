# Project Title

Business-Scopioe

## Introduction

This project involves converting a provided Figma design into a fully functional React.js web application. The application includes login functionality using Firebase, client-side routing with react-router-dom, React-hook-form , react-hot-toast, react-icons, swiper.js and dynamic data display. Tailwind CSS is used for styling to ensure the application is responsive and visually consistent with the Figma design.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)
- [Project Demo](#project-demo)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/siyam79/Business-Scopioe-Front-End-.git
    cd Business-Scopioe
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```
3. **Run the application:**

    ```sh
    npm run dev
    ```

4. **Set up environment variables:**

    Create a `.env` file in the root directory and add your Firebase configuration this Demo :

    ```env
    REACT_APP_AUTH_DOMAIN=your-auth-domain
    REACT_APP_AUTH_CLIENT_ID=your-auth-client-id
    REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    ```
4. **Set up Firebase or Auth0**

For Firebase, create a Firebase project and update the configuration in `src/firebaseConfig.js`.

## Usage

3. ### Open your browser:

    Navigate to `http://localhost:5173` to view the application.

## Features

- **Figma to React.js Conversion:**
  - Responsive and visually consistent with the Figma design.

- **Login Functionality:**
  - Firebase authentication.
  - User session management.
  - Protected routes for authenticated users.


- **Login Features:**
  - Email Password authentication.
  - Google authentication.
  - Facebook authentication.

- **React Router Setup:**
  - Client-side routing with react-router-dom.
  - Routes for login, main content, and other pages as per the design.

- **Dynamic Data Display:**
  - Fetch and display dynamic data with search functionality.
  - User-friendly data display consistent with the Figma design.

- **Styling with Tailwind CSS:**
  - Responsive and consistent styling with the Figma design.

## Dependencies

- React.js
- react-router-dom
- Firebase Auth
- Tailwind CSS
- React-hook-form
- react-hot-toast
- react-icons
- swiper.js

## Configuration

Ensure you have configured Firebase  in the `.env` file with the correct credentials.

## Documentation

- ### Figma Design Conversion:
  - The application is built to match the provided Figma design closely.
  
- ### Login Functionality:
  - Utilizes Firebase/Auth0 for authentication.
  - Includes login page and protected routes.

- ### React Router Setup:
  - Configured routes for navigation within the application.

- ### Dynamic Data Display:
  - Fetches and displays data with a search feature.

- ### Styling:
  - Tailwind CSS is used for component styling.

## Examples

- ### Login Page:
  - Allows users to log in using Firebase/Auth0.

- ### Main Content Pages:
  - Displays dynamic data fetched from a static JSON or mock API.

## Troubleshooting

- ### Common Issues:
  - Ensure environment variables are set correctly in the `.env` file.
  - Check Firebase/Auth0 configuration for correct setup.

## Contributors

- [Siyam Ahmed](https://github.com/siyam79)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Project Demo

You can view a live demo of the application [here](https://your-demo-link.com).

---

Feel free to reach out if you have any questions or need further assistance!
