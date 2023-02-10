import "./CampoTexto.css";

let valor = "Franklin";

const aoDigitado = (evento) => {
  valor = evento.target.value;
  console.log(valor);
};

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        value={valor}
      />
    </div>
  );
};

export default CampoTexto;
