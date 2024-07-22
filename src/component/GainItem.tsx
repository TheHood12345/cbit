const slideritem = [
  {
    title: "Hot",
  },
  {
    title: "Gainers",
  },
  {
    title: "Losers",
  },
  {
    title: "New",
  },
];

export const GainItem = () => {
  return (
    <div className="bg-gray-950 text-white mt-3 py-14 mb-10 px-4 ">
      <div className=" py-5 p-2 flex-wrap flex justify-around bg-orange-500 items-center rounded-lg">
        {slideritem.map((item, index) => (
          <div key={index} className="">
            <p className="mb-5 text-lg font-bold hover:text-blue-500 cursor-pointer">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
