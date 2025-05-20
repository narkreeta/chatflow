"use server";

import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";

// interface ChatAi {     //TypeScript's 'interface' feature is not allowed in JavaScript code [E0213]
//   me: string;
//   ai: {
//     msg: string;
//     load: boolean;
//   };
// }

const systemMessage = "You are indinar's AI, smart in generating data and high level programmer to help in development.";

// export const AiInvoke = async (queries: string, histories: ChatAi[]) => {     //unexpected token [E0054]
export const AiInvoke = async (queries, histories) => {
  const placedHistory: any = histories.map((m) => [
    ["user", m.me],
    ["ai", m.ai.msg],
  ]);
  const prompt = placedHistory.length
    ? ChatPromptTemplate.fromMessages([
        ["system", systemMessage],
        placedHistory.flat().flat(),
        ["user", "{input}"],
      ])
    : ChatPromptTemplate.fromMessages([
        ["system", systemMessage],
        ["user", "{input}"],
      ]);

  const chain = prompt.pipe(chatModel);
  const data = await chain.invoke({
    input: queries,
  });
  return data.content;
};
