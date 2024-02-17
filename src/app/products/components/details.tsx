"use client"
import { ReactPropTypes, useState } from "react"
import { Fragment } from "react"
import { Button } from "@/components/ui/button";
import { AppPropsType } from "next/dist/shared/lib/utils";
import Cart from "./cart/page";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import React from "react";

export default function Product(props:any){

  const [isAlertVisible, setIsAlertVisible] = useState(false);
 
  
  const handleShowAlert = () => {
    setIsAlertVisible(true);
    
 
    // Automatically hide the alert after 2 seconds
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };
    const[value,setValue]=useState<number>(1);
    const [price,setPrice]=useState<number>(props.price)
function Increament(){
    setValue(value+1);
    setPrice(price+props.price);
}
function Decreament(){
    if(value>1){
        setValue(value-1);
        setPrice(price-props.price);
    }
    
}

    return(
      
    <div>
    
    <div className="flex gap-6 my-10 ml-32  ">

    <div> {/*1st div*/}
<img
    
 src={props.image}
 height="200"
 width="150"
 
  /> 
</div> {/*1st div*/}

        
    <div className="grid  grid-cols-2 justify-between ">






<div> {/*2nd div*/}


<img
    
 src={props.image}
 height="1200"
 width="1000"
 
 
  /> 


</div> {/*2nd div*/}



<div className="mt-10 ml-4"> {/*3rd div*/}

<div className="text-3xl font-sans">{props.productName}</div>
<div className="text-gray-400 text-xl font-semibold pt-1"> {props.productType}</div>
<div className="font-bold pt-6">SELECT SIZE</div>

<div className="flex gap-4  text-lg  pt-3">  
<div className="rounded-full text-gray-600 font-semibold px-2 bg-white transform hover:scale-110 hover:bg-slate-100 transition duration-300 ease-in-out cursor-pointer hover:shadow-lg">XS</div>
<div className="rounded-full text-gray-600 font-semibold  px-2 bg-white transform hover:scale-110 hover:bg-slate-100 transition duration-300 ease-in-out cursor-pointer hover:shadow-lg">S</div>
<div className="rounded-full text-gray-600 px-2 bg-white font-semibold  transform hover:scale-110 hover:bg-slate-100 transition duration-300 ease-in-out cursor-pointer hover:shadow-lg">M</div>
<div className="rounded-full text-gray-600 px-2 bg-white font-semibold transform hover:scale-110 hover:bg-slate-100 transition duration-300 ease-in-out cursor-pointer hover:shadow-lg">L</div>
<div className="rounded-full text-gray-600 px-2 bg-white font-semibold transform hover:scale-110 hover:bg-slate-100 transition duration-300 ease-in-out cursor-pointer hover:shadow-lg">XL</div>

</div>
<div className="flex font-bold pt-10 text-xl gap-3 items-center">
<div className="">Quantity: </div>
<button onClick={Decreament} className="pl-4 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
<div className="px-4">{value}</div>
<button onClick={Increament} className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
</div>

<div className="pt-10 flex items-center gap-4">
<Button onClick={handleShowAlert} href="" className="bg-neutral-900 text-white px-6 py-6 gap-2  hover:bg-white hover:text-neutral-700"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</div>Add to Cart</Button >
{isAlertVisible && (
  
        <div className=" fixed bottom-5 right-5  border border-gray-200 p-4 rounded-full">
          <p className="text-gray-800 flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>

 Added {value } 
 {props.productName} to your cart</p>
 
        </div>
        
      )}

<div className="font-bold text-2xl">${price}.00</div>
</div>


</div> {/*3rd div*/}



     </div> {/*grid wala div*/}

        </div>    


        <div className="pt-28 pb-10">
  <h1 className="relative text-2xl font-bold text-black ml-32">
    Product Information
    <p className="ml-72 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300  text-9xl opacity-20 font-bold ">
      Overview
    </p>
  </h1>
</div>

<div className="mx-36 pt-3 text-gray-300">_____________________________________________________________________________________________________________________________________________________________________</div>

<div className="flex mx-36  gap-56 pt-6">

<div className="font-bold  text-gray-400">PRODUCT DETAILS</div>
<p className="font-light text-lg">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



  
</p>





</div>

<div className="flex  mx-36  gap-48 pt-10">

<div className="font-bold  text-gray-400">PRODUCT CARE</div>
<div className="font-light text-lg">

<ul className="list-disc font-semibold">
  <li> Wash using cold water</li>
<li>Do not use bleach.</li>
<li>Hang it to dry.</li>
<li>Iron on low temperature.</li>
</ul>



  
</div>

</div>


    </div>
  
    )
  
}

