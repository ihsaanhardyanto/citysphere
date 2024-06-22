"use client";

import Image from "next/image";
import { FiPlusCircle } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import Message from "./message";

type RelatedPeopleData = {
  name: string;
  position: string;
  image: string;
};

const relatedPeopleData = [
  {
    name: "Ihsaan Hardyanto",
    position: "Social Activist",
    image: "/assets/user3.png",
  },
  {
    name: "Yuzaki Hirota",
    position: "Environmental Expert",
    image: "/assets/user4.png",
  },
  {
    name: "Kevin Evans",
    position: "3rd Year undergrad student",
    image: "/assets/user5.png",
  },
  {
    name: "Ahmed Abdul",
    position: "Physics Honours student",
    image: "/assets/user6.png",
  },
];

export default function Rightbar() {
  return (
    <div className="flex w-1/4 flex-col gap-4 overflow-auto border-l-2 border-black px-4 pt-4">
      <div className="flex flex-col gap-4 rounded-lg border-2 border-black p-4">
        <h1 className="font-medium">People you may know</h1>
        <div className="flex flex-col gap-4">
          {relatedPeopleData.map((data) => (
            <RelatedPeople key={data.name} {...data} />
          ))}
        </div>
        <p className="text-xs">See more...</p>
      </div>
      <NearestEvent />
      <Message />
    </div>
  );
}

function RelatedPeople({ name, position, image }: RelatedPeopleData) {
  return (
    <div className="flex items-center justify-between gap-2">
      <Image
        src={image}
        width={51}
        height={51}
        alt={name}
        className="h-8 w-8"
      />
      <div className="flex w-full flex-col gap-1 text-xs">
        <p className="font-medium">
          {name.length > 16 ? `${name.slice(0, 17)}...` : name}
        </p>
        <p className="text-[9px]">
          {position.length > 20 ? `${position.slice(0, 21)}...` : position}
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FiPlusCircle />
        <p className=" text-xs">Follow</p>
      </div>
    </div>
  );
}

function NearestEvent() {
  return (
    <div className="flex w-full flex-col gap-2 pb-14">
      <h1 className="font-semibold">Nearest Events</h1>
      <div className="flex justify-between gap-2 rounded-lg border-2 bg-black p-4 text-white">
        <div className="flex flex-col gap-2">
          <h2>Bottle Recycle Weeks</h2>
          <div className="flex">
            <p className="text-xs">Pasoepati, Bandung</p>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/assets/community.png"
                width={51}
                height={51}
                alt="Community"
                className="h-10 w-10 rounded-lg"
              />
              <div className="flex items-center gap-2">
                <GoPeople />
                <p className=" w-max text-[10px]">1200-3000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
