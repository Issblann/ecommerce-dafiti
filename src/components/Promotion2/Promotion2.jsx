import React from "react";
import image1promotion2 from "../../assets/promotions-2/image3.svg";
import image2promotion2 from "../../assets/promotions-2/image4.svg";
const Promotion2 = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="max-w-[1500px] w-full  p-3 md:p-5 gap-7 flex flex-wrap md:flex-nowrap md:flex-row">
        <div className="flex justify-center flex-col  items-start  w-full md:w-2/4">
          <img src={image1promotion2} alt="image1promotion2" />
        </div>
        <div className="flex justify-center p-10 flex-col gap-10 text-center items-center w-full md:w-2/4">
          <div className="p-0 md:p-14 lg:p-10">
            <img src={image2promotion2} alt="image2promotion2" />
          </div>
          <h2 className=" font-bold text-[35px] lg:text-[52px]">BOTAS Y BORCEGOS</h2>
          <p className=" font-normal text-[26px] lg:text-[48px]">DESDE $6990</p>
          <p className="font-normal text-[20px] lg:text-[32px]">En 3 CUOTAS SIN INTERES</p>
          <button className=" hover:bg-black hover:text-white transition-all p-1 md:p-0.5  w-full text-[12px] h-[45px] md:text-[16px] rounded-[10px] border-black border">
            COMPRAR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Promotion2;
