"use client";

import Link from "next/link";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
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

export default function Report() {
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
            Report your problems!
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="problem">Problem</label>
                <input
                  type="text"
                  id="problem"
                  placeholder="When the event will be held?"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  placeholder="This event is problmatic because..."
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="evidence">Evidence</label>
                <Input
                  id="evidence"
                  type="file"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
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
              <div className="flex flex-col gap-1">
                <label htmlFor="privacy">Privacy</label>
                <div className="flex items-center space-x-2">
                  <Switch id="privacy" />
                  <Label htmlFor="privacy">Privacy</Label>
                </div>
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-black bg-black px-4 py-2 text-white transition-all duration-300 hover:bg-zinc-800"
                onClick={() => {
                  toast({
                    title: "Your report is submitted! ✅",
                    description:
                      "Now you can see your report in the report page.",
                  });
                }}
              >
                <BsPlusLg className="text-xl font-extrabold" />
                <p>Report Problem</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
