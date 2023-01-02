import seguros from "../../seguros.json";

const CardIcon = () => {
  return (
    <>
      {seguros.map((e) => (
        <div>
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
