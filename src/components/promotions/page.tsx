import { Button } from "../ui/button"
export default function Promotion()
{
    return(
        <div>
        <div className="flex text-blue-700 font-bold text-sm justify-center pt-10">PROMOTIONS</div>
        <div className="flex text-4xl font-extrabold justify-center pt-5">Our Promotion Events</div>

        <div className="grid grid-cols-2 justify-center pt-20 gap-2 px-40 ">
  <div className="">
   
    <div className="rounded relative bg-stone-300 py-20 grid-cols-2 mb-5 flex-wrap-reverse transition-transform duration-300 transform hover:scale-105 cursor-pointer">
       <div>
   
  
    <h1 className="font-bold text-4xl  pl-7 ">GET UP TO 60%</h1>
    <h1 className=" font-medium text-2xl pl-8   text-slate-700">For the summer season</h1>
       </div>
   <div>

   </div>
   <img
    width="300"
    height="150"
    src="./Hackathon-2/event1.webp"
    alt="hero"
    className="absolute top-0 right-7  "
  /> 
    </div>
    <div  className="rounded relative bg-neutral-800  py-16 transition-transform duration-300 transform hover:scale-105 cursor-pointer ">
        <div className="text-white font-extrabold text-4xl px-40 ">GET 30% OFF</div>
        <div className="text-white  px-52 pt-5">USE PROMO CODE</div>
         <Button  className="bg-neutral-500  rounded-xl  mx-20 px-24 text-white font-bold text-xl hover:text-neutral-500 hover:bg-white ">DINEWEEKENDSALE</Button>
    </div>
  </div>
  
  <div className="flex gap-2" >
    
   
<div className="relative rounded bg-red-100 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
 <div className="pt-6 pl-6  pr-36" > Flex Sweatshirt</div> 
 <div className="relative pt-2 pl-6  pr-40 line-through  font-medium" >$100.00 <span className="absolute pl-2 font-semibold"> $75.00</span></div>

 <img
    width="400"
    height="300"
    src="./Hackathon-2/event2.webp "
    alt="hero"
    className="absolute bottom-0 "
  /> 

</div>

<div className="relative rounded bg-stone-300 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
 <div className="pt-6 pl-6   pr-36" > Flex  Bomber</div> 
 <div className="relative pt-2 pl-6  pr-40 line-through  font-medium" >$225.00 <span className="absolute pl-2 font-semibold"> $190.00</span></div>

 <img
    width="300"
    height="200"
    src="./Hackathon-2/event3.webp "
    alt="hero"
    className="absolute bottom-0 "
  /> 

</div>
  </div>

</div>

        </div>

    )
}