"use client";
import { Fragment, useState } from "react";
import Markdown from "react-markdown";
import { AiInvoke } from "./ai";

interface ChatAi {
  me: string;
  ai: {
    msg: string;
    load: boolean;
  };
}

export default function Home() {
  const [queries, setQueries] = useState("");
  const [chats, setChats] = useState<ChatAi[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    setChats([
      ...chats,
      {
        me: queries,
        ai: {
          load: true,
          msg: "",
        },
      },
    ]);
    setQueries("");
    const data = await AiInvoke(queries);
    setChats((chats) => {
      chats[chats.length - 1]["ai"] = {
        load: false,
        msg: data as string,
      };
      return chats;
    });
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col justify-between">
      <div className="h-auto flex-grow mb-2 overflow-auto flex flex-col gap-2 p-2 ">
        {chats.map((item, inx) => {
          return (
            <Fragment key={inx}>
              <UserMessage message={item.me} />
              <AiMessage message={item.ai.msg} load={item.ai.load} />
            </Fragment>
          );
        })}
      </div>
      <div className="relative">
        <textarea
          className="resize-none w-full rounded-md  p-2 mb-4"
          placeholder="Ask To AI..."
          rows={3}
          value={queries}
          onChange={(e) => setQueries(e.target.value)}
        />
        <button
          disabled={loading}
          onClick={handleAsk}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute inset-y-8 right-2"
        >
          Ask
        </button>
      </div>
    </div>
  );
}

const UserMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center gap-4 flex-row-reverse">
      <h4 className="bg-cf-secondary text-white p-2 rounded-full capitalize h-10 w-10 text-center shadow-md shadow-yellow-300">
        me
      </h4>
      <Markdown className="bg-white p-3 rounded text-wrap">{message}</Markdown>
    </div>
  );
};

const AiMessage = ({ message, load }: { message: string; load: boolean }) => {
  return (
    <div className="flex items-center gap-4 flex-row">
      <h4 className="bg-cf-primary text-white p-2 h-10 w-10 text-center rounded-full capitalize shadow-md shadow-yellow-300">
        Ai
      </h4>
      {load ? (
        <h3 className="bg-white p-3 rounded text-wrap">Wait For AI</h3>
      ) : (
        <Markdown className="bg-white p-3 rounded text-wrap">
          {message}
        </Markdown>
      )}
    </div>
  );
};
