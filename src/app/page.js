import Background from "./components/background/Background";
import BtnDirection from "./components/btns/BtnDirection.js";
import BtnSlayder from "./components/btns/BtnSlayder";
import BtnViewCar from "./components/btns/BtnViewCar";


export default function Home() {
  return (
    <>
    <div className="w-screen h-screen bg-slate-400 p-10 flex flex-col justify-center gap-16">
        <div className="w-full max-w-[600px] gap-6 flex flex-col justify-center ">
          <div className="w-[500px] gap-6 flex flex-col justify-center">
            <div className="w-full font-extrabold text-6xl flex">WIN A TOYOTA COROLLA 2024.</div>
            <div className="font-normal text-4xl">
              Buy a ticket and become the driver of this truck.
            </div>
          </div>
          <div className="w-[400px] h-[2px] bg-slate-800 "></div>
          <div className="w-full text-2xl flex ">
            Purchase your ticket today and be a protagonist
            of this story of faith, contributing not only to
            the building of the church, but also to the
            transformation of lives and the strengthening
            of our community.
          </div>
          <div className="w-full h-32 pt-10 pl-6">
            <BtnViewCar />
          </div>
          
        </div>
        
      </div>
      
    </>
  );
}