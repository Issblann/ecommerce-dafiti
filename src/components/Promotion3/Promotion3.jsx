import React from "react";
import image1promotion3 from "../../assets/promotions-3/image7.svg";
import image2promotion3 from "../../assets/promotions-3/image8.svg";
import image3promotion3 from "../../assets/promotions-3/image9.svg";
const Promotion3 = () => {
  return (
    <section className="w-full justify-center flex">
      <div className="max-w-[1500px] w-full p-2">
        <h1 className="text-center">LO MAS VENDIDO DE LA SEMANA</h1>
        <div className=" flex justify-center flex-wrap h-full md:flex-nowrap p-5 gap-9   ">
          <div className="md:text-[20px] md:w-full w-[80%] gap-4  flex-col p-5  flex ">
            <img src={image1promotion3} alt="image1promotion3" />
            <p>AKIABARA</p>
            <p>BLUSA BITONO CON CUELLO ESCOTE V. IDEAL PARA ESTA TEMPORADA</p>
          </div>
          <div className="md:text-[20px] md:w-full w-[80%] gap-4 flex flex-col p-5">
            <img src={image2promotion3} alt="image2promotion3" />
            <p>PRUNE</p>
            <p>SHOPPER BAG DE ECOCUERO. EL HIT DE TU GUARDARROPAS.</p>
          </div>
          <div className=" md:text-[20px] md:w-full w-[80%] gap-4 flex flex-col p-5">
            <img src={image3promotion3} alt="image3promotion3" />
            <p>TASCANI</p>
            <p>PUFFER MEGA ABRIGADA PARA ESTE INVIERNO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion3;
