import Leftbar from "@/components/events/leftbar";
import MainBody from "@/components/events/main-body";
import Rightbar from "@/components/events/rightbar";

export default function Events() {
  return (
    <div className="flex w-full">
      <Leftbar />
      <MainBody />
      <Rightbar />
    </div>
  );
}
