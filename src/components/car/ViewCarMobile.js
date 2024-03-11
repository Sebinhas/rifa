'use client'
import useImageCar from '@/hook/useImageCar'
import BtnSlayder from '../btns/BtnSlayder'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'
import BtnPay from '../btns/BtnPay'
import BtnPosition from '../btns/BtnPosition'


const ViewCar = () => {
   const { img, add, sub } = useImageCar()
   return (
      <div className="w-full md:hidden h-full py-[100px] px-[30px] bg_back  ">
         <div className='w-full justify-center items-center flex flex-col'>
            <div className='flex text-center font-black text-[40px] leading-[40px]'>GANA UN TOYOTA COROLLA 2024</div>
            <div className='w-full flex flex-col justify-center items-center gap-8'>
               <div className="w-full mt-16">
                  <img src={img} />
               </div>
               <div className="w-28 h-10 bg-zinc-800 flex  items-center rounded-full ">
                  <button onClick={() => add()}   className="w-full h-full flex justify-center items-center rounded-full text-lg text-slate-100  hover:bg-slate-600">
                     <BsChevronLeft className="" />
                  </button>
                  <button onClick={() => sub()} className="w-full h-full  flex justify-center items-center rounded-full text-lg text-slate-100  hover:bg-slate-600">
                     <BsChevronRight className="" />
                  </button>
               </div>
               <div>
                  <BtnPay/>
               </div>
               <div>
                  <BtnPosition/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ViewCar
