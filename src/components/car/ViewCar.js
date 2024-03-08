'use client'
import useImageCar from '@/hook/useImageCar'
const ViewCar = () => {
   const { img, add, sub } = useImageCar()
   return (
      <div className="w-full max-w-[600px] ">
         <div className="w-full">
            <img src={img} />
         </div>

         <button
            className="w-[50px] h-[30px] bg-slate-400 mx-10"
            onClick={() => sub()}
         >
            -
         </button>
         <button
            className="w-[50px] h-[30px] bg-slate-400 mx-10"
            onClick={() => add()}
         >
            +
         </button>
      </div>
   )
}

export default ViewCar
