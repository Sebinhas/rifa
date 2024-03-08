const HeaderMain = () => {
   return (
      <div className="w-full h-20 flex fixed px-[60px]">
         <div className="flex justify-start items-center ">
            <div className="">Logo aqui</div>
         </div>
         <div className="w-full h-full flex items-center justify-end text-xl ">
            <div className="flex justify-end mr-5 cursor-pointer">Tickets</div>
            <div className="flex justify-end cursor-pointer">Contact us</div>
         </div>
      </div>
   )
}

export default HeaderMain
