# ChatFlow

ChatFlow is a custom chat application built with TypeScript, Next.js, and Tailwind CSS. This application allows you to interact with an AI model, generating data and assisting with development. 

## Features

- Customizable chat with AI.
- Responsive design.
- Dynamic chat history.
- User-friendly interface.

## Project Structure

The project is structured as follows:

- `app/ai.ts`: Contains the main logic for interaction with the AI model.
- `app/icon.tsx`: Defines the image metadata and image generation for the chat application.
- `app/layout.tsx`: Sets up the root layout for the application.
- `app/page.tsx`: Handles the client-side logic for the chat interface, including message handling and UI rendering.
- `tailwind.config.ts`: Configuration file for Tailwind CSS, a utility-first CSS framework used for styling the application.

## Prerequisites

To run this project, you need to have Node.js and npm installed on your machine.

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/your-username/chatflow.git
    ```

2. Install the dependencies:
    ```
    cd chatflow
    npm install
    ```

3. Run the application:
    ```
    npm run start
    ```

The application will start running at `http://localhost:3000`.

## Usage

Simply type in your message in the text box and press `Ask` to send it to the AI. The AI's response will be displayed in the chat box.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
