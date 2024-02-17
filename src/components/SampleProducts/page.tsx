import Link from "next/link"
import ProductCard from "@/app/all-products/components/cards"
export default function Samples(){
    return(
        <div>
            <div className="flex text-blue-700 font-bold text-sm justify-center pt-24">PRODUCTS</div>
        <div className="flex text-4xl font-extrabold justify-center pt-5">Check What We Have</div>


        <div className="grid grid-cols-3 justify-center pt-20  gap-20 px-24  ">



<div className="transition-transform duration-300 transform hover:scale-105 cursor-pointer">
       
    

<ProductCard
    href="/products/brushed-raglan-sweatshirt"
    imageSrc="./Hackathon-2/product1.png"
    shirtName="Brushed Raglan Sweatshirt"
    shirtType=""
    price={195}
    height={200}
    width={400}
    />


    
</div>

<div className="transition-transform duration-300 transform hover:scale-105 cursor-pointer">
    

<ProductCard
    href="/products/cameryn-Sash-Tie-Dress"
    imageSrc="./Hackathon-2/product.png"
    shirtName="Cameryn Sash Tie Dress"
    shirtType=""
    price={545}
    height={200}
    width={400}
    />


    
</div>


<div className="transition-transform duration-300 transform hover:scale-105 cursor-pointer ">
    

<ProductCard
    href="/products/flex-sweatshirt"
    imageSrc="./Hackathon-2/product2.png"
    shirtName="Flex Sweatshirt"
    shirtType=""
    price={175}
    height={200}
    width={400}
    
    />

    
</div>








</div>



        </div>
    )
}