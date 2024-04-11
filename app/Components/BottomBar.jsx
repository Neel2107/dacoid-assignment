import React from "react";
import Image from "next/image";
const BottomBar = () => {
  return (
    <div className=" bg-white  py-4 md:hidden  fixed bottom-0 w-full z-50">
        <div className="flex justify-between  items-center  w-full flex-row  px-8 relative ">

       
        <div className="flex flex-row items-center gap-10">

      <Image
        src={"/bottom-bar/home.svg"}
        alt="home"
        width={25}
        height={25}
        className="object-contain"
      />
      <Image
        src={"/bottom-bar/workout.svg"}
        alt="home"
        width={25}
        height={25}
        className="object-contain"
        />
        </div>
        <div className="flex flex-row items-center gap-10">

      <Image
        src={"/bottom-bar/camera.svg"}
        alt="home"
        width={25}
        height={25}
        className="object-contain"
        />
      <Image
        src={"/bottom-bar/user.svg"}
        alt="home"
        width={25}
        height={25}
        className="object-contain"
        />
        </div>

    
  <div
    className="h-14 w-14 absolute left-1/2 bottom-2 transform -translate-x-1/2  shadow-xl rounded-full flex items-center justify-center"
    style={{
      background: "linear-gradient(to right, #DEE5FF, #809AFF)",
    }}
  >
    <Image
      src={"/bottom-bar/search.svg"}
      width={40}
      height={40}
      alt="main"
      className="mx-auto h-5 w-5 object-contain"
    />
  </div>


        </div>
    </div>
  );
};

export default BottomBar;
