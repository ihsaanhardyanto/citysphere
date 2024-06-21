import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import UserThread from "@/components/user-thread";
import {
  MdImage,
  MdOutlineEmojiEmotions,
  MdOutlineGifBox,
  MdOutlinePoll,
} from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";

export default function Thread() {
  return (
    <div className="flex h-full w-full flex-col gap-6 p-10">
      <form action="">
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2">
            <Image
              src="/assets/user.png"
              width={51}
              height={51}
              alt="User Icon"
              className="h-10 w-10"
            />
            <Textarea placeholder="What’s happening?" />
          </div>
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-2 px-12">
              <MdImage className="h-8 w-8 transform cursor-pointer transition-transform hover:-translate-y-1" />
              <MdOutlineGifBox className="h-8 w-8 transform cursor-pointer transition-transform hover:-translate-y-1" />
              <MdOutlinePoll className="h-8 w-8 transform cursor-pointer transition-transform hover:-translate-y-1" />
              <MdOutlineEmojiEmotions className="h-8 w-8 transform cursor-pointer transition-transform hover:-translate-y-1" />
              <RiCalendarScheduleLine className="h-8 w-8 transform cursor-pointer transition-transform hover:-translate-y-1" />
            </div>
            <button className="rounded-full bg-black px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 hover:bg-zinc-800">
              Tweet
            </button>
          </div>
        </div>
      </form>
      <UserThread />
      <UserThread />
    </div>
  );
}
