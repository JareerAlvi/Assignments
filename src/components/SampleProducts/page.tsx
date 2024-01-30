
export default function Samples(){
    return(
        <div>
            <div className="flex text-blue-700 font-bold text-sm justify-center pt-24">PRODUCTS</div>
        <div className="flex text-4xl font-extrabold justify-center pt-5">Check What We Have</div>


        <div className="grid grid-cols-3 justify-center pt-20  gap-20 px-24  ">



<div className="transition-transform duration-300 transform hover:scale-105 cursor-pointer">
       
    

<img
    width="400"
    height="200"
    src="./Hackathon-2/product1.png"
    alt="hero"
    className="  "
  /> 
<div className="pt-2 font-bold text-lg ">Brushed Raglan SweatShirt</div>
<div className="pt-3 font-bold text-lg">$195</div>

    
</div>

<div className="transition-transform duration-300 transform hover:scale-105 cursor-pointer">
    

<img
    width="400"
    height="200"
    src="./Hackathon-2/product.png"
    alt="hero"
    className="  "
  /> 
<div className="pt-2 font-bold text-lg ">Cameryn Sash Tie Dress</div>
<div className="pt-3 font-bold text-lg">$545</div>

    
</div>


<div className="transition-transform duration-300 transform hover:scale-105 cursor-pointer">
    

<img
    width="400"
    height="200"
    src="./Hackathon-2/product2.png"
    alt="hero"
    className="  "
  /> 
<div className="pt-2 font-bold text-lg ">Flex SweatShirt</div>
<div className="pt-3 font-bold text-lg">$175</div>

    
</div>








</div>



        </div>
    )
}