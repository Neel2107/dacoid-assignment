import React from "react";
import { roboto } from "../layout";
import { goalsList } from "@/public/your-goal/goalsList";
import { Checkbox } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col bg-[#fcfcfc] p-4 gap-4 min-h-screen relative">
      <h2 className={` text-center font-medium mt-5 text-xl px-4`}>
        What are your goals?
      </h2>

      <div className="w-full mt-10 flex flex-col gap-4 ">
        {goalsList.map((goal) => (
          <div
            className="w-full bg-[#f1f1f1] rounded-md p-4 flex flex-row items-center justify-between"
            key={goal.id}
          >
            <span className="text-sm font-medium">{goal.title}</span>

            <Checkbox/>
          </div>
        ))}
      </div>
      <Link href={"/workout-tracker"}>
        <Button className="bg-gradient-to-r mt-40 from-[#95BEFF] to-[#7B91FF] text-white w-full font-semibold  py-6">
          Confirm
        </Button>
      </Link>
    </div>
  );
};

export default Page;
