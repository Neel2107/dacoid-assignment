"use client"
import React from "react";
import { roboto } from "../layout";
import { goalsList } from "@/public/your-goal/goalsList";
import { Checkbox } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Page = () => {
  const [selectedGoals, setSelectedGoals] = React.useState([]);
  const route = useRouter();
  const handleConfirm = () => {
    if (selectedGoals.length === 0) {
      toast.error("Please select at least one goal");
    } else {
      route.push("/workout/tracker");
    }
  }
  return (
    <div className="flex flex-col bg-[#fcfcfc] p-4 gap-4 min-h-screen relative">
      <Toaster position="top-center" reverseOrder={false} />
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

            <Checkbox
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedGoals([...selectedGoals, goal.id]);
                } else {
                  setSelectedGoals(selectedGoals.filter((id) => id !== goal.id));
                }
              }}
            />
          </div>
        ))}
      </div>
      <Button
        className="bg-gradient-to-r mt-40 from-[#95BEFF] to-[#7B91FF] text-white w-full font-semibold  py-6"
        onClick={handleConfirm}
      >
        Confirm
      </Button>
    </div>
  );
};

export default Page;
