"use client";

import { useState } from "react";

const buttons = [
  { value: "cleaning", label: "Cleaning", count: 34 },
  { value: "carbon", label: "Carbon", count: 92 },
  { value: "workshop", label: "Workshop", count: 104 },
  { value: "reforestation", label: "Reforestation", count: 89 },
  { value: "city", label: "City", count: 54 },
];

export default function Leftbar() {
  const [eventTag, setEventTag] = useState("carbon");

  const handleButtonClick = (value: string) => {
    setEventTag(value);
  };

  return (
    <div className="flex flex-col gap-6 p-10">
      <h1 className="text-4xl font-bold">Latest Events</h1>
      <div className="flex flex-col ">
        {buttons.map((button) => (
          <div
            className={`flex items-center gap-2 px-4 py-2 ${eventTag === button.value ? "border-l-4 border-black" : "border-l-4"}`}
            key={button.value}
          >
            <button
              value={button.value}
              className="text-2xl"
              onClick={() => handleButtonClick(button.value)}
            >
              {button.label}
            </button>
            <p
              className={`rounded-md border-2 border-black p-2 ${eventTag === button.value ? "bg-black text-white" : ""}`}
            >
              {button.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
