interface ISingleProduct {
  title: string;
  description: string;
  image: string;
  brand: string;
}

const PhoneDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const singlePhoneDetail = await fetch(
    `https://jsonserver.reactbd.com/phone/${id}`
  );
  const res: ISingleProduct = await singlePhoneDetail.json();
  return (
    <div className="flex items-center">
      <img width={500} src={res.image} alt="" className="hover:scale-95" />
      <div className="space-y-8 text-lg">
        <p>
          {" "}
          <span className="font-bold">Brand:</span> {res.brand}
        </p>
        <h1>
          {" "}
          <span className="font-bold">Modal: </span> {res.title}
        </h1>
        <p className="mr-24"> {res.description}</p>

        <div>
          <button className="hover:scale-105 border-2 bg-[#0E2954] text-[#9dbde7] p-3 rounded-lg font-bold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;
