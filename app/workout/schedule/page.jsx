import React from "react";
import { roboto } from "../layout";
import { goalsList } from "@/public/your-goal/goalsList";
import { Checkbox } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Switch } from "@nextui-org/react";
import { calenderData } from "@/public/schedule/calenderData";
import { quicksand } from "@/app/layout";
import { timelineData } from "@/public/schedule/timelineData";

const Page = () => {
  return (
    <div className="flex flex-col bg-[#fcfcfc] py-4 gap-4 min-h-screen relative">
      <div className="flex flex-row mt-5 w-full items-center justify-between px-4">
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

        <div className="flex mt-2 flex-row justify-evenly items-center gap-2">
          {calenderData.map((item, index) => {
            if (index === 1)
              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center  text-white rounded-lg px-4 py-2 ${quicksand.className}`}
                  style={{
                    background: "linear-gradient(to right, #DEE5FF, #809AFF)",
                  }}
                >
                  <span className="text-xs font-medium">{item.day}</span>
                  <h2 className="text-2xl mb-3 font-semibold">{item.date}</h2>
                </div>
              );

            return (
              <div
                key={item.id}
                className={`flex flex-col items-center bg-white rounded-lg px-4 py-2 ${quicksand.className}`}
              >
                <span className="text-xs font-medium">{item.day}</span>
                <h2 className="text-2xl mb-3 font-semibold">{item.date}</h2>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col mt-10 ">
          {timelineData.map((item, index) => {
            return (
              <div key={item.id} className=" py-3 border-b border-zinc-300">
                <p className="text-xs font-semibold px-4 ">{item.time}</p>
              </div>
            );
          })}
        </div>

        <div
          className="absolute bottom-32 right-5 rounded-full h-16 w-16 flex items-center justify-center shadow-lg"
          style={{
            background:
              "linear-gradient(90.95deg, #E9B1E0 0.79%, #D3A5F2 99.18%)",
          }}
        >
          <Image
            src={"/schedule/plus.svg"}
            width={20}
            height={20}
            alt="left-arrow"
            className="object-contain h-5 w-5 "
          />
        </div>
        <div className="absolute p-2 bottom-52 left-1/2 transform -translate-x-1/2 rounded-full flex bg-[#f1f1f1]">
          <p className="text-xs font-semibold">Lowerbody Workout, 3pm</p>
        </div>
        <div
          className="absolute p-2 top-[22rem] left-1/2 transform -translate-x-1/2 rounded-full flex "
          style={{
            background:
              "linear-gradient(90.95deg, #E9B1E0 0.79%, #D3A5F2 99.18%)",
          }}
        >
          <p className="text-xs text-white font-semibold">
            Upperbody Workout, 9am
          </p>
        </div>
        <div
          className="absolute p-2 top-[18rem] right-5 rounded-full flex "
          style={{
            background:
              "linear-gradient(90.95deg, #E9B1E0 0.79%, #D3A5F2 99.18%)",
          }}
        >
          <p className="text-xs text-white font-semibold">Ab Workout, 7:30am</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
