import React from "react";

const Footer = () => {
  return (
    <section className="w-full bg-[#222222] text-white flex p-10 justify-start ">
      <div className="  max-w-[1500px] w-full flex flex-col gap-7 ">
        <div>
          <h4 className=" font-bold">EMPRESA</h4>
          <p>SOBRE DAFITI</p>
          <p>ATENCION AL CLIENTE</p>
          <p>INSTITUCIONAL</p>
          <p>DUDAS FRECUENTES</p>
          <p>CAMBIOS Y DEVOLUCIONES</p>
          <p>VENDE CON NOSOTROS</p>
        </div>

        <div>
          <p>
            DAFITI 2011-2022. TODOS LOS DERECHOS RESERVADOS CONOCE NUESTRA
            <a>POLITICA DE PRIVACIDAD.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
