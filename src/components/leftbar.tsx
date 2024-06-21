"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Leftbar() {
  const pathname = usePathname().split("/")[2];
  const [activeButton, setActiveButton] = useState<string | null>(pathname);

  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let greetingMessage = "";
  let svgId = "";
  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "Good Morning";
    svgId = "GoodMorning_SVG";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Good Afternoon";
    svgId = "GoodAfternoon_SVG";
  } else {
    greetingMessage = "Good Evening";
    svgId = "GoodEvening_SVG";
  }

  const getOrdinalSuffix = (date: number) => {
    if (date > 3 && date < 21) return "th";
    switch (date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("en-US", { month: "short" });
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;

  const buttons = [
    { id: "your-event", label: "Your Events" },
    { id: "connection", label: "Connections" },
    { id: "thread", label: "Threads" },
    { id: "your-report", label: "Your Reports" },
  ];

  const handleButtonClick = (id: string) => {
    setActiveButton(id);
  };

  return (
    <div className="flex w-1/4 flex-col justify-between overflow-auto border-r-2 border-black shadow-lg">
      <div className="pb-10">
        <section
          id=""
          className="rounded-r-xl border-b-[1px] border-black p-4 shadow-xl"
        >
          <div id="weather_date" className="flex flex-row items-end gap-2">
            <div id="weather_svg">
              <div
                id="GoodMorning_SVG"
                style={{
                  display: svgId === "GoodMorning_SVG" ? "block" : "none",
                }}
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>GoodMorningSVG</title>
                  <rect width="38" height="38" fill="url(#pattern0_352_240)" />
                  <defs>
                    <pattern
                      id="pattern0_352_240"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_352_240"
                        transform="scale(0.0138889)"
                      />
                    </pattern>
                    <image
                      id="image0_352_240"
                      width="72"
                      height="72"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>

              <div
                id="GoodAfternoon_SVG"
                style={{
                  display: svgId === "GoodAfternoon_SVG" ? "block" : "none",
                }}
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>GoodAfternoon_SVG</title>
                  <rect width="38" height="38" fill="url(#pattern0_660_826)" />
                  <defs>
                    <pattern
                      id="pattern0_660_826"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_660_826"
                        transform="scale(0.0138889)"
                      />
                    </pattern>
                    <image
                      id="image0_660_826"
                      width="72"
                      height="72"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div
                id="GoodEvening_SVG"
                style={{
                  display: svgId === "GoodEvening_SVG" ? "block" : "none",
                }}
              >
                <svg
                  width="39"
                  height="42"
                  viewBox="0 0 39 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>Good Evening</title>
                  <rect width="38" height="38" fill="url(#pattern0_660_828)" />
                  <rect
                    x="11"
                    y="14"
                    width="28"
                    height="28"
                    fill="url(#pattern1_660_828)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_660_828"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_660_828"
                        transform="scale(0.0138889)"
                      />
                    </pattern>
                    <pattern
                      id="pattern1_660_828"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image1_660_828"
                        transform="scale(0.0138889)"
                      />
                    </pattern>
                    <image
                      id="image0_660_828"
                      width="72"
                      height="72"
                      xlinkHref="data:image/png;base64,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"
                    />
                    <image
                      id="image1_660_828"
                      width="72"
                      height="72"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
            </div>
            <div id="date">
              <p className="text-sm font-bold">{formattedDate}</p>
            </div>
          </div>

          <div>
            <div className="flex flex-row gap-1">
              {greetingMessage},
              <p id="user_name" className="font-bold">
                User!
              </p>
            </div>
          </div>
        </section>

        <section id="side_links">
          {buttons.map((button) => (
            <div
              key={button.id}
              id={button.id}
              className={`rounded-r-xl border-b-2 border-black py-8 ${
                activeButton === button.id ? "bg-black" : ""
              }`}
            >
              <Button
                variant="link"
                className={`text-base ${
                  activeButton === button.id
                    ? "font-bold text-white"
                    : "font-normal"
                }`}
                onClick={() => handleButtonClick(button.id)}
              >
                {button.label}
              </Button>
            </div>
          ))}
        </section>
      </div>

      <div className="flex items-center gap-4 border-t-2 border-black p-4">
        <Image
          src="/assets/user.png"
          width={51}
          height={51}
          alt="User Icon"
          className="h-10 w-10"
        />
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Aldo Ronaldo</h2>
          <p className="text-xs">Social Activist on Greenpeace</p>
        </div>
      </div>
    </div>
  );
}
