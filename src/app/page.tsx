
import Hero from "@/components/HeroPage/page"
import { InputWithButton } from "@/components/icons/input"
import Promotion from "@/components/promotions/page"
import Samples from "@/components/SampleProducts/page"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
<div>
<Hero />
<Promotion/>
<Samples/>
<div className="pt-40 flex justify-end w-full text-5xl px-20 font-bold">Unique and Authentic </div>
<div className=" flex justify-end w-full text-5xl px-36 font-bold"> Vintage Designer</div>
<div className=" flex justify-end w-full text-5xl px-56 font-bold pb-2">Jewellery</div>


<div className="grid grid-cols-2 justify-center gap-2 px-40 pt-10">

<div className="relative h-full w-full  ">
  {/* Your main content */}
 
    
  
 <div className="grid grid-cols-2  gap-5 pt-5">

 <div className="grid  ">

<h1 className="pb-28">
  <div className="font-bold pb-5">Using Good Quality Materials</div>
  <div>Lorem ipsum dolor sit amt, consectetur adipiscing elit</div>
</h1>

<h1>
<div className="font-bold pb-5">100% Handmade Products</div>
  <div>Lorem ipsum dolor sit amt, consectetur adipiscing elit</div>
</h1>

</div>

<div className="grid">

<h1 className="pb-28">
<div className="font-bold pb-5">Modern Fashion Design</div>
  <div>Lorem ipsum dolor sit amt, consectetur adipiscing elit</div>
</h1>

<h1>
<div className="font-bold pb-5">Discount for Bulk Orders</div>
  <div>Lorem ipsum dolor sit amt, consectetur adipiscing elit</div>
</h1>


</div>

 </div>


 
  {/* Watermark */}
  <div className="pt-20 px-52">
  <p className="absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 text-gray-300  text-7xl opacity-40 font-bold  ">
   Different from others
  </p>
  
    </div>
</div>
<div className="flex gap-5">
  <div className="flex-1">
  <img
    width="400"
    height="200"
    src="./Hackathon-2/product6.png"
    alt="hero"
    className="  "
  /> 
  </div>
  <div className="flex-1  ">
     <p>
     This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
      </p> 

      <div className="pt-10">
  <Button href="/all-products" className="bg-black text-white pt-2 hover:bg-inherit hover:text-black">See All Products</Button>
      </div>
  </div>
</div>
</div>

<div className="pt-40">

<div className="relative h-full">
  {/* Your main content */}
  <p className="flex text-2xl font-bold justify-center  ">
    <div className="grid gap-20">
<div className="grid gap-5 mt-5">
<div className="text-4xl">Subscribe to Our Newsletter</div>
<div className="font-normal text-sm px-16"> Get the latest information and promo offers directly</div>
</div>
<div className="px-14">
<InputWithButton/>
</div>

    </div>
   

  </p>

  {/* Watermark */}
  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 text-9xl opacity-20">
    NewsLetter
  </p>
</div>


</div>

</div>

  )
}
