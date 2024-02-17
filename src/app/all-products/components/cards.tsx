import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  imageSrc: string;
  width?: number;
  height?: number;
  shirtName: string;
  shirtType: string;
  price: number;
  href?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  width = 300,
  height = 300,
  shirtName,
  shirtType,
  price,
  href,
}) => {
  const content = (
    <div className="">
      <img
        width={width}
        height={height}
        src={imageSrc}
        alt="product"
        className=""
      />
      <div className="pt-2 font-bold text-lg">{shirtName}</div>
      <div className="pt-1 text-gray-500">{shirtType}</div>
      <div className="pt-3 font-bold text-lg">${price}</div>
    </div>
  );

  return href ? (
    <Link href={href} passHref>
      <div>{content}</div>
    </Link>
  ) : (
    content
  );
};

export default ProductCard;
