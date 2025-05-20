# ChatFlow - Custom Chat with AI

ChatFlow is a web application that allows users to interact with an Artificial Intelligence. Built with Next.js and Tailwind CSS, it leverages the power of AI to generate meaningful responses to user queries.

## Project Structure

The project consists of several essential files:

1. `app/ai.ts` - This file defines the AI model and its invocation function. It uses the ChatOllama model from langchain and provides a function to generate responses based on user queries and chat history.

2. `app/icon.tsx` - Defines the application's icon.

3. `app/layout.tsx` - Defines the base layout of the application, including the metadata and the font used throughout the application.

4. `app/page.tsx` - This is the main page of the application. It includes the logic for handling user queries and generating AI responses.

5. `tailwind.config.ts` - The configuration file for Tailwind CSS, which defines additional styles for the application.

## Setup

To setup the project on your local machine, follow these steps:

1. Clone the repository
2. Install dependencies using `npm install` or `yarn install`
3. Start the development server using `npm run dev` or `yarn dev`

## Usage

Open the application in your browser. You'll see a chat interface where you can type your queries. Once you submit your query, the AI will process it and respond to you.

## Contributing

Contributions are welcome. Please create a fork of the repository and create a Pull Request for any changes.

## License

This project is licensed under the MIT License.