import React from "react";
import "./css/two.css";
import "./css/one.css";
const About = () => {
  return (
    <div className="about">
      <h2 className=" text-center underline  decoration-rojito font-bold text-2xl p-3 px-5 md:px-10 md:mt-0 md:text-4xl lg:text-6xl lg:mt-16 2xl:text-8xl 2xl:mt-20 2xl:pl-20 text-slate-800  ">
        ChurroDog
      </h2>
      <div className="bg-[url('/src/assets/dogos.jpg')] w-full h-auto flex justify-center items-center mt-10 pb-20  ">
        <div className="bg-white w-[95%] lg:w-[85%] 2xl:w-[75%]  h-auto lg:h-auto rounded-lg shadow-2xl shadow-[rgb(176,176,176)] p-6 text-center">
          <h3 className="text-lg lg:text-3xl font-bold text-azulito">
            Historia
          </h3>
          <p className="p-6 tracking-wide text-justify lg:text-center leading-loose lg:text-xl  2xl:text-xl">
            Mi primera mascota se llamo layka en honor primer perrita que voló
            al especio exterior.<br></br>
            Otra mascota que tuve se llamo Capricornio un perrito maltes. estos
            dos angelitos me marcaron de por vida Y aprendí que la fidelidad y
            el amor tenían cuatro patas.<br></br>
            Sin saberlo la vida me llevo al mundo de alimentación de las
            mascotas, ya que yo trabajaba para una organización donde se
            fabricaba la proteína animal que se utiliza en la fabricación de
            alimentos balanceados para mascotas.<br></br>
            El tiempo es el mejor maestro, tuve que estudiar y aprender todo
            sobre la alimentación de nuestros perrijos, y desde hace 5 años me
            propuse crear un alimento para nuestras mascotas, el cual no tuviera
            elementos químicos.<br></br>
            Mi sueño era crear un alimento tipo BARF con menor humedad posible y
            qué alimentara a nuestras mascotas de forma sana y nutritiva después
            de innumerables pruebas nació{" "}
            <a className="underline decoration-rojito font-bold">ChurroDog</a>.
            <br></br>
            Existe una cita que rige mi compromiso con las mascotas :
            <p className="italic ">
              "Que la comida sea su alimento y su alimento, su medicina."
            </p>{" "}
            Gracias por su confianza.
          </p>
        </div>
      </div>
      <hr className="salto" />
      <div className="contenedor-general  w-auto h-full bg-white grid  lg:flex mt-20" >
        <div className="información bg-white w-full   lg:w-1/2 pb-[10%]">
          <h1 className="p-3 px-5 lg:text-xl lg:mt-5 2xl:text-xl 2xl:mt-10 2xl:pl-20 text-slate-800">
            <p className="font-bold">Misión :</p>
            <br></br>
            Consolidar nuestra empresa como líder en la creación de alimentos
            naturales y orgánicos para mascotas por medio de la más alta
            calidad, respaldados por un equipo de profesionales calificados en
            la fabricación de alimento con alta biodisponibilidad digestiva y
            nutritiva contribuyendo así a la salud y bienestar de los mismos.
          </h1>
          <h1 className="p-3 px-5 lg:text-xl  2xl:text-xl 2xl:mt-5 2xl:pl-20 text-slate-800">
            <p className="font-bold">Visión :</p>
            <br></br>
            Ser una empresa de clase mundial y abarcar la mayor parte del
            mercado ofreciendo productos de alta digestibilidad sin aditivos ni
            conservadores generando un desarrollo integral para nuestros
            colaboradores y su entorno social.
          </h1>
        </div>
        <div className="información w-full h-auto  lg:w-1/2 flex justify-center algin-center items-center ">
          <img
            src={require("../assets/perrito2.png")}
            className="img1P    "
            alt="churrodog perro feliz"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;