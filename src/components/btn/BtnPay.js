import { PiShoppingCart } from "react-icons/pi";

const BtnPay = () => {
    return ( 
        <div className="w-52 flex flex-col rounded-xl gap-2 bg-zinc-800 shadow-zinc-600 shadow-lg">
            <div className="pl-4 pt-4 text-3xl font-extrabold text-zinc-100">$ 20.00</div>
            <div className="flex justify-between ">
                <div className="pl-4 pb-4 text-2xl text-zinc-100" >Buy Now</div>
                <div className="w-20 rounded-tl-3xl rounded-br-xl text-3xl flex justify-center items-center  text-zinc-50 opacity-80 bg-zinc-500">
                    <PiShoppingCart/>
                </div>
            </div>
        </div>
     );
}
 
export default BtnPay;