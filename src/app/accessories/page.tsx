import Link from "next/link";
import React from "react";

interface IAccessories {
  _id: number;
  price: number;
  previousPrice: number;
  image: string;
  brand: string;
}
const Accessories = async () => {
  const getAccessoriesData = await fetch(
    "https://jsonserver.reactbd.com/accessories"
  );
  const res: IAccessories[] = await getAccessoriesData.json();
  return (
    <>
      <h1 className="text-center text-3xl my-16 italic text-teal-700 underline">
        Get your Favorite Accessories{" "}
      </h1>
      <div className="flex justify-evenly flex-wrap mx-6  gap-x-5 gap-y-16 ">
        {res.map((item) => (
          <div key={item._id} className="border-2 border-gray-400">
            <Link href={`/singleaccessories/${item._id}`}>
              <img
                height={100}
                width={270}
                src={item.image}
                alt=""
                className="hover:scale-105"
              />
            </Link>
            <p className="text-lg text-gray-500 ml-3">{item.brand}</p>
            <div className="flex justify-between mx-3 my-1 text-lg">
              <del className="text-red-600">${item.previousPrice}</del>
              <p>${item.price}</p>
            </div>
            <div className="flex justify-between mx-3 my-3 text-lg">
              <button className="hover:underline">Add to Cart</button>
              <Link href={`/singleaccessories/${item._id}`}>
                <button className="hover:underline">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accessories;
