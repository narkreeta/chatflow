"use server";

import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const chatModel = new ChatOllama({
  baseUrl: "http://localhost:11434", // Default value
  model: "llama3",
});

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are narkreeta's AI, High Intelligence data solvers.",
  ],
  ["user", "{input}"],
]);

const chain = prompt.pipe(chatModel);

export const AiInvoke = async (queries: string) => {
  const data = await chain.invoke({
    input: queries,
  });
  return data.content;
};
