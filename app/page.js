import Image from "next/image";
import Link from "next/link";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base  ">
        <div className="font-bold flex gap-6 md:gap-20 md:text-5xl justify-center items-center text-3xl">
          LaunchPad
          {/* <span><Image className="invertImage" src="/tea.gif" width={88} height={88} alt="" /></span> */}
          </div>
        <p className="text-center md:text-left">
          A crowdfunding platform for startups to raise funds and showcase their ideas. 
          
        </p>
        <p className="text-center md:text-left">

         LaunchPad connects innovators with supporters to fuel their journey from idea to reality.
        </p>
        <div>
          <Link href={"/login"}>

          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>

          <Link href="/about">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>

        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
  <h2 className="text-3xl font-bold text-center mb-14">Turn Ideas into Reality with Support</h2>
  <div className="flex gap-5 justify-around">
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} height={88} src="/man.gif" alt="" />
      <p className="font-bold text-center">Investors want to support</p>
      <p className="text-center">Your backers are here to believe in your vision</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} height={88} src="/coin.gif" alt="" />
      <p className="font-bold text-center">Investors want to fund</p>
      <p className="text-center">They are ready to contribute and help you grow financially.</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} height={88} src="/group.gif" alt="" />
      <p className="font-bold text-center">Investors want to collaborate</p>
      <p className="text-center">Your supporters are open to partner and accelerate your journey</p>
    </div>
  </div>
</div>
      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* Responsive youtube embed  */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/cNGjD0VG4R8?si=qE8VFQTsB0RrVxN-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
      
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}