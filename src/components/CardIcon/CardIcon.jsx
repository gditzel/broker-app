import icon from "../../assets/img/icon.jpg";

const CardIcon = () => {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <img src={icon} alt="icon" />
        </div>
        <div className="text-center">
          <h1 className="font-semibold">Automotores</h1>
          <p className="text-gray-600 px-10 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad a
            temporibus unde in nobis.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardIcon;
