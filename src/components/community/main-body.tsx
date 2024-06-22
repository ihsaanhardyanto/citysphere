import Image from "next/image";
import { GoPeople } from "react-icons/go";
import { HiSearch } from "react-icons/hi";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const communityData = [
  {
    id: 1,
    logo: "/assets/community.png",
    name: "TFISC @Bandung",
    address: "Paskal 23, Bandung",
    member: "12k+",
    isJoined: true,
  },
  {
    id: 2,
    logo: "/assets/community2.png",
    name: "Pandawara",
    address: "Bandung, West Java",
    member: "100k+",
    isJoined: false,
  },
  {
    id: 3,
    logo: "/assets/community3.png",
    name: "WALHI JABAR",
    address: "Bandung, West Java",
    member: "9k+",
    isJoined: "false",
  },
  {
    id: 4,
    logo: "/assets/community4.png",
    name: "Forestisme @Ban..",
    address: "Bandung, West Java",
    member: "2k+",
    isJoined: false,
  },
  {
    id: 5,
    logo: "/assets/community5.png",
    name: "SRE ITB",
    address: "Ganesha, Bandung",
    member: "4k+",
    isJoined: true,
  },
  {
    id: 6,
    logo: "/assets/community6.png",
    name: "YPBB @Bandung",
    address: "Bandung, West Java",
    member: "12k+",
    isJoined: false,
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
            placeholder="Find Community..."
            className="w-full py-2 outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium">1 of 18 pages</p>
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
      <div className="grid grid-cols-2 gap-6">
        {communityData.map((community) => (
          <div
            key={community.id}
            className={`flex cursor-pointer items-center justify-between gap-2 rounded-xl border border-black p-4 shadow-lg transition-all duration-300 ${community.isJoined === true ? "bg-black text-white" : "bg-white text-black hover:bg-zinc-200"}`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={community.logo}
                width={51}
                height={51}
                alt={community.name}
                className="h-10 w-10 rounded-lg bg-white"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-bold">{community.name}</h2>
                <p>{community.address}</p>
              </div>
            </div>
            <div className="flex w-24 flex-col gap-1">
              <div className="flex items-center justify-center gap-2">
                <GoPeople />
                <p className=" w-max text-sm">{community.member}</p>
              </div>
              <button
                className={`rounded-lg px-2 py-1 font-bold ${community.isJoined === true ? "bg-white text-black" : "bg-black text-white"}`}
              >
                {community.isJoined === true ? "Joined" : "Join"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
