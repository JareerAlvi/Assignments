import React from 'react';
import Link from 'next/link';
interface ShoppingCartIconProps {
  size?: number;
}
const path:string="/products/components/cart"
const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({ size = 24 }) => {
  return (
    <div className="relative group inline-block">
      <Link href={path}>
        <div className='flex rounded-full bg-gray-200 h-10 w-10 justify-center hover:scale-110 hover:shadow-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
        </div>


      <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-gray-300 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Additional content or styles for the circular background */}
      </div>
      
      </Link>
      
    </div>
  );
};

export default ShoppingCartIcon;
