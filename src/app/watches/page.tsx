import Link from "next/link";
import React from "react";

interface IWatches {
  _id: number;
  price: number;
  previousPrice: number;
  image: string;
  brand: string;
}

const Watches = async () => {
  const getData = await fetch("https://jsonserver.reactbd.com/watch");
  const res: IWatches[] = await getData.json();
  return (
    <>
      <h1 className="text-center text-3xl my-16 italic text-teal-700 underline">
        Get your Favorite Watch{" "}
      </h1>
      <div className="flex justify-evenly flex-wrap px-8  gap-x-6 gap-y-16 ">
        {res.map((item) => (
          <div key={item._id} className="border-2 border-gray-400">
            <Link href={`/singlewatch/${item._id}`}>
              <img
                height={100}
                width={270}
                src={item.image}
                alt=""
                className="hover:scale-95"
              />
              <p className="text-lg text-gray-500 ml-3">{item.brand}</p>
            </Link>
            <div className="flex justify-between mx-3 my-1 text-lg">
              <del className="text-red-600">${item.previousPrice}</del>
              <p>${item.price}</p>
            </div>
            <div className="flex justify-between mx-3 my-3 text-lg">
              <button className="hover:underline">Add to Cart</button>
              <Link href={`/singlewatch/${item._id}`}>
                <button className="hover:underline">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Watches;
