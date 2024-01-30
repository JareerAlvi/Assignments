import React from 'react';

interface ShoppingCartIconProps {
  size?: number;
}

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({ size = 24 }) => {
  return (
    <div className="relative group inline-block">
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer transition-transform transform group-hover:scale-110"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke="currentColor"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
      <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-gray-300 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Additional content or styles for the circular background */}
      </div>
    </div>
  );
};

export default ShoppingCartIcon;
