"use client"
import React, { useState } from "react";
import { Inter, Montserrat } from "next/font/google";
import { roboto } from "../layout";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import Login from "../Components/Login";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const validateFirstName = () => {
    if (!firstName) {
      toast.error("Please enter your first name.");
      return false;
    }
    return true;
  };

  const validateLastName = () => {
    if (!lastName) {
      toast.error("Please enter your last name.");
      return false;
    }
    return true;
  };

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

  const validateCheckbox = () => {
    if (!isChecked) {
      toast.error("Please agree to the T&C and Privacy Policy.");
      return false;
    }
    return true;
  };

  const handleCreateAccount = () => {
    if (validateFirstName() && validateLastName() && validateEmail() && validatePassword() && validateCheckbox()) {
      router.push("/your-goals");
    }
  };

  return (
    <div className="flex flex-col py-4 gap-4 min-h-screen relative">
         <Toaster position="top-center" reverseOrder={false} />
      <h2 className={`${roboto.className} font-medium mt-5 text-lg px-4`}>
        Create an account
      </h2>

      <div className="flex mt-5 flex-col gap-5 px-4">
        <Input type="text" label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <Input type="text" label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="mt-2 px-4">
        <Checkbox size="sm" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}>
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
        onClick={handleCreateAccount}
      />
    </div>
  );
};

export default Page;
