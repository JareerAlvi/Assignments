import ProductCard from "./components/cards"
export default function AllProducs(){
return(
    <div>

<div className="flex">

<div className="grid grid-cols-4 justify-center mx-32 gap-20 py-10">

<h3 className="hover: cursor-pointer" >
<ProductCard
    href="/products/raglan-sweatshirt"
    imageSrc="./Hackathon-2/product10.png"
    shirtName="Raglan Sweatshirt"
    shirtType="Sweater"
    price={195}
    />

</h3>

<h4 className="hover: cursor-pointer" >
<ProductCard
    href="/products/flex-pushbutton-bomber"
    imageSrc="./Hackathon-2/product7.png"
    shirtName="Flex Push Button Bomber"
    shirtType="Jackets"
    price={225}
    />

</h4>




</div>




</div>










    </div>
)

}