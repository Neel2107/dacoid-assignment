
"use client"
import React from "react";
import { roboto } from "../layout";
import { goalsList } from "@/public/your-goal/goalsList";
import { Checkbox } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Switch } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const route = useRouter()
  return (
    <div className="flex flex-col bg-[#fcfcfc] p-4 gap-4 min-h-screen relative">
      <div className="flex flex-row mt-5 w-full items-center justify-between">
        <div onClick={() => route.back()} className="p-1 rounded-md bg-[#f1f1f1]">
          <Image
            src={"/schedule/left-arrow.svg"}
            width={20}
            height={20}
            alt="left-arrow"
            className="object-contain h-3 w-3 self-start"
          />
        </div>
        <h2 className="text-center font-semibold text-xl px-4 flex-grow">
          Workout Tracker
        </h2>
        <div></div> {/* Empty div to balance the flex container */}
      </div>
      <div className="mt-10 relative ">
        <Image
          src={"/tracker/chart.svg"}
          width={500}
          height={500}
          alt="main"
          className="mx-auto h-40 w-full object-contain"
        />
        <div className="absolute top-3 right-40">
          <h2 className="text-sm">Good job</h2>
        </div>
        <div className="absolute top-3 right-5">
          <h2 className="text-sm">less then 320cal</h2>
        </div>
      </div>

      <div
        className="rounded-xl p-3 flex flex-row items-center gap-4"
        style={{
          background:
            "linear-gradient(90.07deg, rgba(129, 157, 255, 0.28) 5.94%, rgba(16, 16, 16, 0) 76.45%)",
        }}
      >
        <Image src={"/tracker/warning.svg"} width={20} height={20} alt="main" />
        <p className="text-sm font-medium">
          You&apos;ve burned fewer calories than yesterday. Time to get moving!{" "}
        </p>
      </div>

      <div className="flex flex-col mt-5 gap-4 ">
        <div className="flex flex-row items-center justify-between">
          <p className=" font-semibold">Upcoming Workout</p>
          <p className="text-zinc-600 text-xs">See more</p>
        </div>

        <div className="flex flex-row rounded-xl shadow-lg items-center justify-between p-3">
          <div className="flex flex-row gap-3">
            <Image
              src={"/tracker/workout-1.svg"}
              width={50}
              height={50}
              alt="main"
              className="object-contain"
            />

            <div className="flex flex-col justify-between">
              <h2 className="text-sm font-medium">Full Body Workout</h2>
              <span className="text-xs mb-2 text-zinc-600">Today 3pm</span>
            </div>
          </div>

          <Switch
            defaultSelected
            color="secondary"
            size="sm"
            aria-label="Automatic updates"
          />
        </div>
        <div className="flex flex-row rounded-xl shadow-lg items-center justify-between p-3">
          <div className="flex flex-row gap-3">
            <Image
              src={"/tracker/workout-2.svg"}
              width={50}
              height={50}
              alt="main"
              className="object-contain"
            />

            <div className="flex flex-col justify-between">
              <h2 className="text-sm font-medium">Upper Body Workout</h2>
              <span className="text-xs mb-2  text-zinc-600">
                4 Feb, 3:30 pm
              </span>
            </div>
          </div>

          <Switch
            defaultSelected
            color="secondary"
            size="sm"
            aria-label="Automatic updates"
          />
        </div>

        <h2 className=" font-semibold">What Do You Want to Train</h2>

        <div className="bg-[#b9cffe] rounded-lg p-3 flex flex-row  justify-between text-sm">
          <div className="flex flex-col gap-1 font-medium">
            <h2>Full Body Workout</h2>
            <p className="text-xs">Arms</p>
            <span className="text-xs">Chest</span>
          </div>

          <Image
              src={"/tracker/workout-main.svg"}
              width={100}
              height={100}
              alt="main"
              className="object-contain"
            />
        </div>
      </div>
    </div>
  );
};

export default Page;

// background: linear-gradient(90.07deg, rgba(129, 157, 255, 0.28) 5.94%, rgba(16, 16, 16, 0) 76.45%);
