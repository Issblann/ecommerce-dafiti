import React from "react";

const CallToAction = () => {
  return (
    <section className="w-full flex justify-center p-5">
      <div className="flex w-full max-w-[1500px] md:flex-row flex-wrap md:flex-nowrap p-8 justify-center items-center gap-6 ">
        <div className=" w-full md:w-[50%] gap-5 flex flex-col">
          <h1 className=" font-bold text-[38px] lg:text-[48px]">
            RECIBE UN 8% DE DESCUENTO ADICIONAL EN TU PRIMERA COMPRA
          </h1>
          <p className="font-normal text-[22px] lg:text-[32px]">
            SUSCRIBETE A NUESTRO NEWSLETTER Y RECIBE LAS MEJORES PROMOCIONES Y NOVEDADES DEL MUNDO
            DE LA MODA
          </p>
        </div>

        <div className=" w-full md:w-[50%] p-2 md:p-10 h-auto md:h-full flex justify-start items-start flex-col  ">
          <form className="flex w-full p:0 md:p-4 justify-center items-start flex-col gap-10">
            <input
              className="w-full bg-transparent p-2 border border-[#7C7A7A]"
              type="text"
              placeholder="TU CORREO ELECTRONICO"
            />
            <div className="w-full flex justify-center md:justify-start">
              <button
                className="rounded-[10px] p-3  border text-[14px] hover:bg-black hover:text-white transition-all border-black"
                type="submit">
                SUSCRIBIRME
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
