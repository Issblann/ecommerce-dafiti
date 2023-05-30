import React from "react";
import IMG1 from "../../assets/Hero/img-1.svg";
const Hero = () => {
  return (
    <section className=" w-full flex justify-center  ">
      <div className=" max-w-[1500px] items-center flex-col md:flex-row p-2 flex justify-center md:p-5">
        <div className=" w-full md:w-3/6  ">
          <img src={IMG1} alt="IMG1" />
        </div>
        <div className=" w-full md:w-3/6 flex  gap-16 flex-col items-center text-center leading-[63px] p-0 md:p-10 justify-center">
          <h2 className=" text-[30px] md:text-[52px] font-bold ">TEMPORADA DE CAMPERAS </h2>
          <p className="text-[25px] md:text-[48px] font-normal">HASTA 35% OFF</p>
          <small className=" text-[17px] md:text-[32px] font-normal">EN 3 CUOTAS SIN INTERES</small>
          <button className=" hover:bg-black hover:text-white transition-all p-0 md:p-0.5 max-w-[278px] w-3/5 text-[12px] md:text-[20px] rounded-[10px] border-black border ">
            COMPRAR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
