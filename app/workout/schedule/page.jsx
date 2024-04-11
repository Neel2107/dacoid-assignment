import React from "react";
import { roboto } from "../layout";
import { goalsList } from "@/public/your-goal/goalsList";
import { Checkbox } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Switch } from "@nextui-org/react";

const Page = () => {
  return (
    <div className="flex flex-col bg-[#fcfcfc] p-4 gap-4 min-h-screen relative">
      <div className="flex flex-row mt-5 w-full items-center justify-between">
        <div className="p-1 rounded-md bg-[#f1f1f1]">
          <Image
            src={"/schedule/left-arrow.svg"}
            width={20}
            height={20}
            alt="left-arrow"
            className="object-contain h-3 w-3 self-start"
          />
        </div>
        <h2 className="text-center font-semibold text-xl px-4 flex-grow">
          Workout Schedule
        </h2>
        <div></div> {/* Empty div to balance the flex container */}
      </div>

      <div className="flex flex-col ">
        <div className="flex flex-row gap-2 items-center justify-center">
          <div>
            <Image
              src={"/schedule/left-arrow.svg"}
              width={20}
              height={20}
              alt="left-arrow"
              className="object-contain h-3 w-3 self-start"
            />
          </div>
          <span className="text-sm font-semibold">Feb 2024</span>
          <div>
            <Image
              src={"/schedule/left-arrow.svg"}
              width={20}
              height={20}
              alt="left-arrow"
              className="object-contain h-3 w-3 self-start"
              style={{ transform: "rotate(180deg)" }}
            />
          </div>
        </div>

        <div className="flex">
          
        </div>
      </div>
    </div>
  );
};

export default Page;
