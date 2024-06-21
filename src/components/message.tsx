"use client";

import Image from "next/image";
import { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type MessageData = {
  name: string;
  position: string;
  image: string;
  chat: string;
};

const messageData = [
  {
    name: "Pamela Anderson",
    position: "Social Activist",
    image: "/assets/user7.png",
    chat: "Hey, how are you?",
  },
  {
    name: "Fiona Smith",
    position: "Environmental Expert",
    image: "/assets/user8.png",
    chat: "We need to talk about the project soon!",
  },
  {
    name: "Samantha Brown",
    position: "3rd Year undergrad student",
    image: "/assets/user9.png",
    chat: "Let's meet up soon!",
  },
  {
    name: "John Doe",
    position: "Physics Honours student",
    image: "/assets/user8.png",
    chat: "I have an idea for the project.",
  },
  {
    name: "Jane Doe",
    position: "Physics Honours student",
    image: "/assets/user9.png",
    chat: "I have an idea for the project.",
  },
];

export default function Message() {
  const [showMessages, setShowMessages] = useState(false);

  return (
    <div className="relative">
      {showMessages ? (
        <div className="absolute -bottom-6 z-30 flex w-full flex-col rounded-lg border-2 border-black bg-white px-4  shadow-lg">
          <div className="flex items-center justify-between gap-2 border-b border-black py-4">
            <BsChatDots className="text-lg" />
            <p className="text-sm text-zinc-600">Messages</p>
            <p className="rounded-[50%] bg-black p-1 text-xs text-white">6</p>
            <IoIosArrowDown onClick={() => setShowMessages(false)} />
          </div>
          <div className="flex h-52 flex-col gap-4 overflow-auto py-2">
            {messageData.map((data: MessageData) => (
              <div className="flex items-center gap-2" key={data.name}>
                <Image
                  src={data.image}
                  width={51}
                  height={51}
                  alt={data.name}
                  className="h-8 w-8"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium">
                    {data.name.length > 16
                      ? `${data.name.slice(0, 17)}...`
                      : data.name}
                  </p>
                  <p className="text-[9px]">
                    {data.chat.length > 20
                      ? `${data.chat.slice(0, 21)}...`
                      : data.chat}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-1 rounded-xl border-2 border-black p-4">
          <BsChatDots className="text-lg" />
          <p className="text-sm text-zinc-600">Messages</p>
          <p className="rounded-[50%] bg-black p-1 text-xs text-white">6</p>
          <IoIosArrowUp onClick={() => setShowMessages(true)} />
        </div>
      )}
    </div>
  );
}
