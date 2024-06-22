"use client";

import Link from "next/link";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import { IoArrowBack } from "react-icons/io5";
import { useToast } from "@/components/ui/use-toast";

const eventTags = [
  "Environment",
  "Social",
  "Energy",
  "Workshop",
  "Recycle",
  "Reforestation",
  "Carbon",
  "Water",
  "Cleaning",
  "Clothes",
];

export default function Create() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { toast } = useToast();

  function handleSelectedTag(tag: string) {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prev) =>
        prev.filter((selectedTag) => selectedTag !== tag),
      );
    } else {
      setSelectedTags((prev) => [...prev, tag]);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="flex h-full w-full items-center justify-center p-10">
      <div className="flex w-3/4 flex-col items-center">
        <div className="flex w-full items-center">
          <Link href={"/events"}>
            <button className="left-0 flex items-center rounded-lg border border-black px-2 py-1 transition-colors duration-300 hover:bg-black hover:text-white">
              <IoArrowBack />
            </button>
          </Link>
          <h1 className="mx-auto pb-6 text-3xl font-bold">
            Create your events!
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Cleaning the beach"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="association">Association</label>
                <div className="flex items-center justify-start gap-2 overflow-hidden rounded-md border-2 pl-4 pr-1 text-[16px]">
                  <HiSearch className="text-xl" />
                  <input
                    id="association"
                    type="text"
                    placeholder="Search"
                    className="w-full py-2 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="participant">Participants</label>
                <input
                  id="participant"
                  type="number"
                  placeholder="100"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  type="text"
                  placeholder="Jakarta, Indonesia"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="tag">Tags</label>
                <div className="flex flex-wrap gap-2">
                  {eventTags.map((tag) => (
                    <div
                      key={tag}
                      className={`rounded-full border border-black px-2 py-1 transition-all duration-300 hover:cursor-pointer ${
                        selectedTags.includes(tag)
                          ? "bg-black text-white"
                          : "bg-white text-black hover:bg-zinc-200"
                      }`}
                      onClick={() => handleSelectedTag(tag)}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-black bg-black px-4 py-2 text-white transition-all duration-300 hover:bg-zinc-800"
                onClick={() => {
                  toast({
                    title: "Your events is created! ✅",
                    description:
                      "Now you can see your events in the events page.",
                  });
                }}
              >
                <BsPlusLg className="text-xl font-extrabold" />
                <p>Create Events</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
