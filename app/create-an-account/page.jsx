import React from "react";
import { Inter, Montserrat } from "next/font/google";
import { roboto } from "../layout";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import Login from "../Components/Login";

const Page = () => {
  return (
    <div className="flex flex-col py-4 gap-4 min-h-screen relative">
      <h2 className={`${roboto.className} font-medium mt-5 text-lg px-4`}>
        Create an account
      </h2>

      <div className="flex mt-5 flex-col gap-5 px-4">
        <Input type="text" label="First Name" />
        <Input type="text" label="Last Name" />
        <Input type="email" label="Email" />
        <Input type="password" label="Password" />
      </div>
      <div className="mt-2 px-4">
        <Checkbox size="sm">
          <p className="text-xs">
            By proceeding, I agree to all{" "}
            <span className="text-[#9FB2FF] underline">T&C</span> and{" "}
            <span className="text-[#9FB2FF] underline">Privacy Policy</span>
          </p>
        </Checkbox>
      </div>
      <Login
        btnText={"Create an Account"}
        lastText={"Already have an account?"}
        option={"Login"}
        btnLink={"/your-goals"}
        optionLink={"/welcome-back"}
      />
    </div>
  );
};

export default Page;
