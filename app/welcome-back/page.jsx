"use client";
import React, { useState } from "react";
import { Inter, Montserrat } from "next/font/google";
import { roboto } from "../layout";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import Login from "../Components/Login";
import { EyeSlashFilledIcon } from "../Components/PasswordIcons/EyeSlashFilled";
import { EyeFilledIcon } from "../Components/PasswordIcons/EyeFilled";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const route = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = () => {
    if (!email) {
      toast.error("Please enter your email.");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      toast.error("Please enter your password.");
      return false;
    }
    return true;
  };

  const handleSignIn = () => {
    if (validateEmail() && validatePassword()) {
     route.push("/workout/tracker");
    }
  };

  return (
    <div className="flex flex-col py-4 gap-4 min-h-screen relative">
        <Toaster position="top-center" reverseOrder={false} />
      <h2 className={`${roboto.className} font-medium mt-5 text-lg px-4`}>
        Welcome Back
      </h2>

      <div className="flex mt-5 flex-col gap-5 px-4">
        <Input type="email" label="Email" size="md" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input
          size="lg"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <p className=" text-sm px-4 underline text-[#7f7f7f]">
          Forgot your password?
        </p>
      </div>
      <Login
        btnText={"Sign In"}
        lastText={"Don't have an account yet?"}
        option={"Create an account"}
        btnLink={"/workout/tracker"}
        optionLink={"/create-an-account"}
        onClick={handleSignIn}
      />
    </div>
  );
};

export default Page;