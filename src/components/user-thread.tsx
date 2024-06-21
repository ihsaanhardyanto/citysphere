"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export default function UserThread() {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="flex flex-col gap-6 rounded-lg border-2 p-6">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/user.png"
          width={51}
          height={51}
          alt="User Icon"
          className="h-8 w-8"
        />
        <div className="flex items-center gap-2">
          <p>You</p>
          <IoIosArrowForward />
          <p className="font-medium">Social Impact</p>
        </div>
      </div>
      <p>
        &quot;Facing yet another pressing environmental issue in the vibrant
        streets of Bandung City. It&apos;s time to unite and take meaningful
        action to safeguard our environment for the well-being of our community
        and the planet. Let&apos;s work together towards sustainable solutions.
        #BandungEnvironment #ClimateAction #PreserveOurPlanet 🌳🌏&quot;
      </p>
      <Image
        src="/assets/post-image.png"
        width={550}
        height={250}
        alt="Post"
        priority
        className="h-80 w-full rounded-3xl object-cover shadow-2xl"
      />
      <div className="flex items-center gap-2">
        <Heart />
        <p>Joe, Shaan & 3 others like this</p>
      </div>
      {showComments ? (
        <div className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <h2 className="font-semibold">Comments:</h2>
            <button
              onClick={() => setShowComments(false)}
              className="text-xs font-semibold text-blue-500"
            >
              Hide Comments
            </button>
          </div>
          <div className="flex w-full gap-4 rounded-lg bg-[#F5F5F5] p-4">
            <Image
              src={"/assets/user2.png"}
              width={51}
              height={51}
              alt="User2"
              className="h-7 w-7"
            />
            <div className="flex flex-col">
              <h2 className="font-semibold">Ridwan Kamil</h2>
              <p>
                Bandung&apos;s environment needs our attention now more than
                ever. Let&apos;s act fast!
              </p>
            </div>
          </div>
          <form action="" className="flex items-center gap-2">
            <Input placeholder="Write a Comment..." />
            <IoSend />
          </form>
        </div>
      ) : (
        <button
          onClick={() => setShowComments(true)}
          className="text-xs font-semibold text-blue-500"
        >
          View Comments
        </button>
      )}
    </div>
  );
}
