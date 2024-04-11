import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-[#fcfcfc] relative min-h-screen">
      <div className="flex items-center justify-end">
        <Link href={"/create-an-account"}>
        <p className="text-[#9fb2ff] font-medium underline">Skip</p>
        </Link>
      </div>

      <Image
        src={"/your-goal/main.svg"}
        width={500}
        height={500}
        alt="main"
        className="mx-auto mt-20  h-60 w-full object-contain"
      />

      <div className="flex mt-10 flex-col gap-3">
        <h1 className="text-lg font-semibold">Track your Goal</h1>
        <p className="text-sm text-[#787878]">
          Don’t worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </p>
      </div>

<Link href={"/get-burn"}>

   <div className="absolute right-5 bottom-10 h-14 w-14 rounded-full flex items-center justify-center">
   <svg
    className="absolute  h-16 w-16 rounded-full"
    style={{
      transform: "rotate(-90deg)",
      transformOrigin: "50% 50%",
    }}
  >
    <circle
      cx="50%"
      cy="50%"
      r="45%"
      stroke="#89a1ff"
      strokeWidth="2%"
      fill="transparent"
      strokeDasharray="calc(65 * 3.14)"
      strokeDashoffset="calc(45 * 3.14)"
    />
  </svg>
  <div
    className="absolute h-12 w-12 rounded-full flex items-center justify-center"
    style={{
      background: "linear-gradient(to right, #DEE5FF, #809AFF)",
    }}
  >
    <Image
      src={"/schedule/right-white.svg"}
      width={30}
      height={30}
      alt="main"
      className="mx-auto h-4 w-4 object-contain"
    />
  </div>
</div>  
</Link>
    </div>
  );
}
