import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
const Login = ({ btnText, lastText, option, optionLink, btnLink }) => {
  return (
    <div className="absolute bottom-0 flex flex-col gap-4 p-4 py-5 w-full ">
      <Link href={btnLink}>
        <Button className="bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] text-white w-full font-semibold  py-6">
          {btnText}
        </Button>
      </Link>

      <div className=" flex flex-row items-center gap-2">
        <div className="h-[1px] bg-zinc-400 flex-1" />
        <span className="text-sm">Or</span>
        <div className="h-[1px] bg-zinc-400 flex-1" />
      </div>

      <div className="flex flex-row justify-center items-center gap-4">
        <div className="p-3 rounded-md border border-zinc-400">
          <Image
            src={"/socials/google.svg"}
            alt="google"
            width={17}
            height={17}
            className="object-contain"
          />
        </div>
        <div className="p-3 rounded-md border border-zinc-400">
          <Image
            src={"/socials/facebook.svg"}
            alt="google"
            width={17}
            height={17}
            className="object-contain h-[17px] w-[17px]"
          />
        </div>
      </div>
      <div>
        <p className="text-center font-medium text-sm">
          {lastText}{" "}
          <Link href={optionLink}>
            <span className="text-[#9FB2FF]  underline">{option}</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
