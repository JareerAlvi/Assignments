import ProductCard from "./components/cards"
export default function AllProducs(){
return(
    <div>

<div className="flex">

<div className="grid grid-cols-4 justify-center mx-32 gap-20 py-10">

<h1 className="hover: cursor-pointer" >
    <ProductCard
     href="/products/brushed-raglan-sweatshirt"
    imageSrc="./Hackathon-2/product1.png"
    shirtName="Brushed Raglan Sweatshirt"
    shirtType="Sweater"
    price={195}
    />
</h1>

<h2 className="hover: cursor-pointer" >
<ProductCard
    href="/products/cameryn-Sash-Tie-Dress"
    imageSrc="./Hackathon-2/product.png"
    shirtName="Cameryn Sash Tie Dress"
    shirtType="Dress"
    price={545}
    />

</h2 >

<h3 className="hover: cursor-pointer" >
<ProductCard
    href="/products/flex-sweatshirt"
    imageSrc="./Hackathon-2/product2.png"
    shirtName="Flex Sweatshirt"
    shirtType="Sweater"
    price={175}
    />

</h3>

<h4 className="hover: cursor-pointer" >
<ProductCard
    href="/products/flex-sweat-pants"
    imageSrc="./Hackathon-2/product3.png"
    shirtName="Flex Sweatpants"
    shirtType="Pants"
    price={175}
    />

</h4>

</div>




</div>




<div className="flex">

<div className="grid grid-cols-4 justify-center mx-32 gap-20 py-10">

<h1 className="hover: cursor-pointer" >
    <ProductCard
    href="/products/flex-fleece-sweapants"
    imageSrc="./Hackathon-2/product4.png"
    shirtName="Pink Fleece Sweatpants"
    shirtType="Pants"
    price={195}
    />
</h1>

<h2 className="hover: cursor-pointer" >
<ProductCard
    href="/products/lite-sweatpants"
    imageSrc="./Hackathon-2/product5.png"
    shirtName="Lite Sweatpants"
    shirtType="Pants"
    price={150}
    />

</h2>

<h3 className="hover: cursor-pointer" >
<ProductCard
    href="/products/imperial-Alpaca-Hoodie"
    imageSrc="./Hackathon-2/product6.png"
    shirtName="Imperial Alpaca Hoodie"
    shirtType="Jackets"
    price={525}
    />

</h3>

<h1 className="hover: cursor-pointer" >
    <ProductCard
    href="/products/muscle-tank"
    imageSrc="./Hackathon-2/product8.png"
    shirtName="Muscle Tank"
    shirtType="T-Shirts"
    price={75}
    />
</h1>

</div>




</div>



<div className="flex">

<div className="grid grid-cols-4 justify-center mx-32 gap-20 py-10">



<h2 className="hover: cursor-pointer" >
<ProductCard
    href="/products/brushed-bomber"
    imageSrc="./Hackathon-2/product9.png"
    shirtName="Brushed Bomber"
    shirtType="Jackets"
    price={225}
    />

</h2>





</div>




</div>








    </div>
)

}