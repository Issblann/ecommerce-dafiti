import React from "react";
import image1promotion1 from "../../assets/promotions-1/image5.svg";
import image2promotion1 from "../../assets/promotions-1/image6.svg";
const Promotion1 = () => {
  return (
    <section className="w-full flex p-5 mt-3 justify-center">
      <div className="max-w-[1500px] w-full p-3 gap-7 flex flex-wrap md:flex-nowrap md:flex-row">
        <div className=" flex justify-start flex-col gap-10 text-center items-start  w-full md:w-2/5">
          <img width="639px" src={image2promotion1} alt="image2promotion1" />
          <div>
            <h3 className=" text-[18px] md:text-[32px] font-medium">
              10% OFF +3 CUOTAS SIN INTERES
            </h3>
            <p className=" font-normal text-[14px]  md:text-[24px]">
              COMPRAS, CHALECOS, TAPADOS, SACOS Y BLAZERS
            </p>
          </div>
        </div>
        <div className="relative  flex items-center flex-col justify-start w-full md:w-3/5">
          <img width="798px" src={image1promotion1} alt="image1promotion1" />
          <div className="absolute  top-[30%] lg:top-[40%]  text-white text-center font-bold ">
            <h2 className="text-[15px] md:text-[32px]  lg:text-[52px]">FW / 23</h2>
            <h2 className="text-[15px] md:text-[32px] mb-2 lg:text-[52px]">FASHION TRENDS</h2>
            <button className=" hover:text-black hover:bg-white transition-all border border-white max-w-[243px] w-[80%] text-[12px] md:text-[16px] p-2 md:p-4 ">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion1;
