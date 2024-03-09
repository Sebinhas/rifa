import BtnPay from '@/components/btns/BtnPay'
import BtnViewCar from '@/components/btns/BtnViewCar'
export default function IndexWeb() {
   return (
      <div className='w-full h-full hidden md:block'>
         <div className="w-full h-full  flex flex-row">
            <div className=" w-1/2 flex justify-start items-center pl-[40px]">
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
            <div className="w-1/2 flex justify-center items-center">
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
   )
}
