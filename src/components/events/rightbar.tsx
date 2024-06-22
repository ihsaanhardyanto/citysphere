import Link from "next/link";
import { BsPlusLg } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const sceduledEvents = [
  {
    date: "3",
    month: "Mar",
    title: "Braga Street Clean Up",
    location: "@ Braga Street",
  },
  {
    date: "20",
    month: "Mar",
    title: "Ciwastra Market Trash Disposal",
    location: "@ Ciwastra Market",
  },
  {
    date: "2",
    month: "Apr",
    title: "Kopo Trafic Jam",
    location: "@ Kopo",
  },
];

export default function Rightbar() {
  return (
    <div className="flex w-1/3 flex-col gap-6 p-10">
      <Link href={"/events/create"}>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-black bg-black px-4 py-2 text-white transition-all duration-300 hover:bg-zinc-800">
          <BsPlusLg className="text-xl font-extrabold" />
          <p>Create Events</p>
        </button>
      </Link>
      <Link href={"/events/report"}>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-black bg-white px-4 py-2 text-black transition-all duration-300 hover:bg-zinc-100">
          <p>Report Problem</p>
        </button>
      </Link>
      <div className="flex flex-col divide-y-2 rounded-xl border border-black font-medium">
        <h1 className="p-2">General</h1>
        <div className="flex flex-col divide-y-2">
          <button className="flex w-full items-center justify-between p-2">
            <p className="text-sm">Recommended</p>
            <IoIosArrowForward />
          </button>
          <button className="flex w-full items-center justify-between p-2">
            <p className="text-sm">Interested</p>
            <IoIosArrowForward />
          </button>
          <button className="flex w-full items-center justify-between p-2">
            <p className="text-sm">Your Events</p>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="flex flex-col divide-y-2 rounded-xl border border-black font-medium">
        <h1 className="p-2">Scheduled Events</h1>
        <div className="flex flex-col divide-y-2">
          {sceduledEvents.map((event, index) => (
            <div className="flex w-full items-center gap-2 p-2" key={index}>
              <div className="flex flex-col items-center overflow-hidden rounded-md text-xs">
                <p className="px-2 py-1 text-zinc-500">{event.date}</p>
                <p className="bg-black px-2 py-1 text-white">{event.month}</p>
              </div>
              <div className="flex flex-col items-start gap-1 text-xs">
                <p className="font-bold">{event.title}</p>
                <p className="text-zinc-500">{event.location}</p>
                <button>Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
