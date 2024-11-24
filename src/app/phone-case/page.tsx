import Link from "next/link";
import React from "react";

interface IPhoneCase {
  _id: number; // Unique identifier for the product
  title: string; // Title of the product
  price: number; // Current price of the product
  previousPrice: number; // Previous price before discount
  description: string; // Detailed description of the product
  category: string; // Category the product belongs to
  image: string; // URL of the product image
  isNew: boolean; // Indicates if the product is new
  brand: string; // Brand name of the product
  quantity: number; // Available quantity of the product
}
const PhoneCase = async () => {
  const getPhoneCaseData = await fetch(
    "https://jsonserver.reactbd.com/phonecase"
  );
  const res: IPhoneCase[] = await getPhoneCaseData.json();

  return (
    <>
      <h1 className="text-center text-3xl my-16 italic text-teal-700 underline">
        Get your Favorite Phone Case{" "}
      </h1>
      <div className="flex justify-evenly flex-wrap mx-6  gap-x-5 gap-y-16 ">
        {res.map((item) => (
          <div key={item._id} className="border-2 border-gray-400">
            <Link href={`/phonecase/${item._id}`}>
              <img height={100} width={270} src={item.image} alt="" />
            </Link>

            <p className="text-lg text-gray-500 ml-3">{item.brand}</p>
            <div className="flex justify-between mx-3 my-1 text-lg">
              <del className="text-red-600">${item.previousPrice}</del>
              <p>${item.price}</p>
            </div>
            <div className="flex justify-between mx-3 my-3 text-lg">
              <button className="hover:underline">Add to Cart</button>
              <Link href={`/phonecase/${item._id}`}>
                <button className="hover:underline">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PhoneCase;
