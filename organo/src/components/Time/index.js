import React from "react";
import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador, index) => (
            <Colaborador
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={props.corPrimaria}
              key={index}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
