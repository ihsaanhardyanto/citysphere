import Link from "next/link";
import { BsPlusLg } from "react-icons/bs";
import { Checkbox } from "../ui/checkbox";

export default function Rightbar() {
  return (
    <div className="flex w-1/3 flex-col gap-6 p-10">
      <Link href={"/community/create"}>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-black bg-black px-4 py-2 text-white transition-all duration-300 hover:bg-zinc-800">
          <BsPlusLg className="text-xl font-extrabold" />
          <p>Create Community</p>
        </button>
      </Link>
      <div className="flex flex-col divide-y-2 rounded-xl border border-black font-medium">
        <h1 className="p-2">Filter</h1>
        <div className="flex flex-col divide-y-2">
          <div className="flex w-full items-center justify-between p-2">
            <label htmlFor="nearby" className="text-sm">
              Nearby
            </label>
            <Checkbox id="nearby" />
          </div>
          <div className="flex w-full items-center justify-between p-2">
            <label htmlFor="most-members" className="text-sm">
              Most Members
            </label>
            <Checkbox id="most-members" />
          </div>
          <div className="flex w-full items-center justify-between p-2">
            <label htmlFor="verified" className="text-sm">
              Verified
            </label>
            <Checkbox id="verified" />
          </div>
        </div>
      </div>
    </div>
  );
}
