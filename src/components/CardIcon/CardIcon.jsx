import seguros from "../../utils/json/seguros.json";

const CardIcon = () => {
  return (
    <>
      {seguros.map((e) => (
        <div key={e.name} className="md:hover:scale-110 transition ease-in-out">
          <div className="flex justify-center h-40">
            <img src={e.image} alt={e.imageAlt} />
          </div>
          <div className="text-center">
            <h1 className="font-semibold">{e.name}</h1>
            <p className="text-gray-600 px-10 mb-10 max-w-md mx-auto">
              {e.desc}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardIcon;
