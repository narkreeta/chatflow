import fs from 'fs';
const logStream = fs.createWriteStream('./app.log', { flags: 'a' });
/**
 * Logs a message to a file with a timestamp.
 *
 * @param message - The message to be logged.
 */
function logToFile(message: string) {
    const logMsg = `[${new Date().toISOString()}] ${message}`;
    logStream.write(logMsg + "\n");
}
"use server";
const systemMessage = "You are indinar's AI, smart in generating data and high level programmer to help in development.";
/**
 * Invokes the AI model with the provided user query and chat histories.
 *
 * Formats the chat history, constructs a prompt template, and sends the user query to the AI model.
 * Logs the AI response or any errors encountered during invocation.
 *
 * @param {string} userQuery - The user's query to send to the AI model.
 * @param {any[]} chatHistories - An array of chat history objects, each containing 'me' (user message) and 'ai.msg' (AI response).
 * @returns {Promise<any>} - The content of the AI model's response.
 * @throws Will throw an error if invocation fails.
 */
export const aiInvoke = async function (userQuery: string, chatHistories: any[]) {
    try {
        const formattedHistory: any = chatHistories.map((historyItem) => [
            ["user", historyItem.me],
            ["ai", historyItem.ai.msg],
        ]);
        const promptTemplate = formattedHistory.length
            ? ChatPromptTemplate.fromMessages([
                ["system", systemMessage],
                formattedHistory.flat().flat(),
                ["user", "{input}"],
            ])
            : ChatPromptTemplate.fromMessages([
                ["system", systemMessage],
                ["user", "{input}"],
            ]);

        // Assuming chatModel is defined elsewhere in the actual codebase
        // If not, this will throw and be caught below
        // @ts-ignore
        const chatChain = promptTemplate.pipe(chatModel);
        const responseData = await chatChain.invoke({
            input: userQuery,
        });
        logToFile("AI Response: " + JSON.stringify(responseData.content));
        return responseData.content;
    } catch (error: any) {
        logToFile("aiInvoke Error: " + (error && error.stack ? error.stack : String(error)));
        throw error;
    }
};