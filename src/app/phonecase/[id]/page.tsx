interface IPhoneCase {
  title: string;
  description: string;
  image: string;
  brand: string;
}

const PhoneCaseDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const singlePhoneCaseDetail = await fetch(
    `https://jsonserver.reactbd.com/phonecase/${id}`
  );
  const res: IPhoneCase = await singlePhoneCaseDetail.json();
  return (
    <div className="flex justify-between gap-16 m-20 items-center ">
      <img
        width={500}
        src={res.image}
        alt=""
        className="border-2 border-gray-400 hover:scale-95"
      />
      <div className="space-y-8 text-lg">
        <p>
          <span className="font-bold">Brand:</span> {res.brand}
        </p>
        <h1>
          <span className="font-bold">Name: </span> {res.title}
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

export default PhoneCaseDetail;
