"use client";
import { Fragment, useState } from "react";
import Markdown from "react-markdown";
import { AiInvoke } from "./ai";
import aiImage from "@/public/image/ai.jpeg";
import avImage from "@/public/image/avatar.png";
import Image from "next/image";

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
    const data = await AiInvoke(queries, chats);
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
          className="bg-black text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded absolute inset-y-8 right-2"
        >
          Ask
        </button>
      </div>
    </div>
  );
}

const UserMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex items-end gap-4 flex-row-reverse p-4 rounded">
      <div className="bg-black text-white relative text-center rounded-full capitalize shadow-md">
        <Image
          src={avImage.src}
          alt=""
          blurDataURL={avImage.blurDataURL}
          height={40}
          width={40}
          className="object-cover object-center rounded-full"
        />
      </div>
      <Markdown className="bg-white p-3 rounded text-wrap">{message}</Markdown>
    </div>
  );
};

const AiMessage = ({ message, load }: { message: string; load: boolean }) => {
  return (
    <div className="flex items-end gap-4 flex-row p-4 rounded">
      <div className="bg-black text-white relative text-center rounded-full capitalize shadow-md shadow-white">
        <Image
          src={aiImage.src}
          alt=""
          blurDataURL={aiImage.blurDataURL}
          height={50}
          width={50}
          className="object-cover object-center rounded-full"
        />
      </div>
      {load ? (
        <h3 className="text-white bg-black p-3 rounded text-wrap font-mono text-sm">
          Wait For AI
        </h3>
      ) : (
        <Markdown className="text-white bg-black font-mono text-sm p-3 tracking-wide rounded text-wrap">
          {message}
        </Markdown>
      )}
    </div>
  );
};
