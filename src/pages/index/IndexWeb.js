import BtnPay from '@/components/btns/BtnPay'
import BtnViewCar from '@/components/btns/BtnViewCar'
export default function IndexWeb() {
   return (
      <div className='w-full h-screen hidden md:block bg_back text-zinc-800 relative'>
         <div className='w-full h-full flex pt-[100px] px-[30px] pb-[40px] '>
            <div className='w-1/2 lg:w-1/2 xl:w-2/5 h-full flex flex-col justify-center items-center' >
               <div className='w-full flex flex-col justify-center'>
                  <div className='w-full max-w-[350px] lg:max-w-[550px] flex flex-col gap-4'>
                     <div className='text-3xl lg:text-4xl xl:text-6xl font-bold'>
                        GANA UN TOYOTA COROLLA 2024
                     </div>
                     <div className=' leading-6 text-lg lg:text-2xl'>
                        Compra un boleto y conviértete en el conductor de este auto
                     </div>
                  </div>
                  <div className='w-64 h-[2px] bg-zinc-800 my-4  xl:my-6'></div>
                  <div className='flex text-justify text-lg  leading-5 lg:text-xl xl:text-2xl font-normal'>
                     Compra tu boleto hoy y sé protagonista de esta historia de
                     fe, contribuyendo no solo a la construcción de la iglesia,
                     sino también a la transformación de vidas y el
                     fortalecimiento de nuestra comunidad.
                  </div>
               </div>
            </div>
            <div className='w-1/2 lg:w-1/2 xl:w-3/5 h-full relative flex justify-center items-center' >
               <div>
                  <img  src="/image/car/4.png" />
               </div>
            </div>
         </div>

         <div className="absolute right-[30px] bottom-[40px]">
            <BtnPay />
         </div>
         <div className="absolute left-[30px] bottom-[40px]">
            <BtnViewCar />
         </div>

      </div>
   )
}

/*
<div className='w-full h-full hidden md:block'>
         <div className="w-full h-full  flex flex-row">
            <div className=" w-1/2 lg:w-2/5 flex justify-start items-center pl-[40px]">
               <div className="w-full ">
                  <div className="font-extrabold text-5xl max-w-[500px] mb-2">
                     GANA UN TOYOTA COROLLA 2024
                  </div>
                  <div className="font-light text-2xl max-w-[500px]">
                     Compra un boleto y conviértete en el conductor de este auto
                  </div>
                  <div className="my-5 w-[100px] h-[1px] bg-zinc-800 "></div>
                  <div className="font-light text-xl max-w-[500px] text-justify">
                     Compra tu boleto hoy y sé protagonista de esta historia de
                     fe, contribuyendo no solo a la construcción de la iglesia,
                     sino también a la transformación de vidas y el
                     fortalecimiento de nuestra comunidad.
                  </div>
               </div>
            </div>
            <div className="w-1/2 lg:w-3/5 flex justify-center items-center">
               <div className="w-full ">
                  <img src="/image/car/4.png" />
               </div>
            </div>
         </div>
         <div className="fixed right-[40px] bottom-[40px]">
            <BtnPay />
         </div>
         <div className="fixed left-[40px] bottom-[40px]">
            <BtnViewCar />
         </div>
      </div>

*/