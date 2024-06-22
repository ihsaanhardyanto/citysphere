import Image from "next/image";
import { GoPeople } from "react-icons/go";
import { HiSearch } from "react-icons/hi";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const eventData = [
  {
    id: 1,
    title: "Bottle Recycle Weeks",
    tag: ["Workshop", "Recycle"],
    location: "Pasoepati, Bandung",
    community: {
      name: "TFISC",
      logo: "/assets/community.png",
    },
    participants: "1200-3000",
  },
  {
    id: 2,
    title: "Tree Planting",
    tag: ["Reforestation", "Carbon"],
    location: "Taman Kopo Indah, Kopo",
    community: {
      name: "TFISC",
      logo: "/assets/community.png",
    },
    participants: "140-300",
  },
  {
    id: 3,
    title: "Swap Party",
    tag: ["Recycle", "Clothes"],
    location: "Langit Lobby, Paskal 23",
    community: {
      name: "TFISC",
      logo: "/assets/community.png",
    },
    participants: "6200-8000",
  },
  {
    id: 4,
    title: "River Cleaning",
    tag: ["Water", "Cleaning"],
    location: "Cikapundung River",
    community: {
      name: "TFISC",
      logo: "/assets/community.png",
    },
    participants: "9600-15k",
  },
  {
    id: 5,
    title: "Green House Install",
    tag: ["Reforestation", "Carbon"],
    location: "Sabuga ITB, Ganesha",
    community: {
      name: "TFISC",
      logo: "/assets/community.png",
    },
    participants: "140-300",
  },
  {
    id: 6,
    title: "Energy Saving ",
    tag: ["Workshop", "Energy"],
    location: "Cai Lobby, Paskal 23 ",
    community: {
      name: "TFISC",
      logo: "/assets/community.png",
    },
    participants: "7200-8000",
  },
];

export default function MainBody() {
  return (
    <div className="flex w-full flex-col gap-6 p-10">
      <div className="flex w-full justify-between ">
        <div className="flex items-center justify-start gap-2 overflow-hidden rounded-md border border-black pl-4 pr-1 text-[16px]">
          <HiSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full py-2 outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium">1 of 48 pages</p>
          <div className="flex items-center gap-2">
            <button className="rounded-full border border-black bg-white p-2 text-black">
              <IoArrowBack />
            </button>
            <button className="rounded-full border border-black bg-black p-2 text-white">
              <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {eventData.map((event) => (
          <div
            key={event.id}
            className="flex cursor-pointer flex-col gap-2 rounded-xl border border-black p-4 transition-all duration-300 hover:bg-black hover:text-white"
          >
            <h2 className="text-xl">{event.title}</h2>
            <div className="flex flex-wrap gap-1 text-xs">
              {event.tag.map((tag) => (
                <p
                  key={tag}
                  className="rounded-full border border-current px-2 py-1"
                >
                  {tag}
                </p>
              ))}
            </div>
            <p className="text-xs">{event.location}</p>
            <div className="flex items-center gap-2">
              <Image
                src={event.community.logo}
                width={51}
                height={51}
                alt={event.community.name}
                className="h-10 w-10 rounded-lg"
              />
              <div className="flex flex-col">
                <p className="text-sm font-medium">{event.community.name}</p>
                <div className="flex items-center gap-2">
                  <GoPeople />
                  <p className=" w-max text-[10px]">{event.participants}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
