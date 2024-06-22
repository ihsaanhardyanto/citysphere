"use client";

import Link from "next/link";
import { BsPlusLg } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function Create() {
  const { toast } = useToast();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="flex h-full w-full items-center justify-center p-10">
      <div className="flex w-3/4 flex-col items-center">
        <div className="flex w-full items-center">
          <Link href={"/community"}>
            <button className="left-0 flex items-center rounded-lg border border-black px-2 py-1 transition-colors duration-300 hover:bg-black hover:text-white">
              <IoArrowBack />
            </button>
          </Link>
          <h1 className="mx-auto pb-6 text-3xl font-bold">
            Create your community!
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
                  placeholder="Pandawara"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  placeholder="A community for developers"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="logo">Logo</label>
                <Input
                  type="file"
                  id="logo"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Jl. Pandawa"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="member">Maximum Member</label>
                <input
                  type="number"
                  id="member"
                  placeholder="100"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-black bg-black px-4 py-2 text-white transition-all duration-300 hover:bg-zinc-800"
                onClick={() => {
                  toast({
                    title: "Your community was created successfully ✅",
                    description:
                      "Now you can start to create events and invite members!",
                  });
                }}
              >
                <BsPlusLg className="text-xl font-extrabold" />
                <p>Create Community</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
