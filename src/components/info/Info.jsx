import "./Info.css";
import certificadoDW from "../../media/certificadoDW.png";
import certificadoJavaScript from "../../media/certificadoJavaScript.png";
import certificadoReact from "../../media/certificadoReact.png";

const Info = () => {
  const certificados = [
    {
      nombre: "Desarrollo Web",
      url: "https://www.coderhouse.com/certificados/628fbae7c17ec8001b3cc598",
      imagen: certificadoDW,
    },
    {
      nombre: "JavaScript",
      url: "https://www.coderhouse.com/certificados/62e73889b64208002443885f",
      imagen: certificadoJavaScript,
    },
    {
      nombre: "React",
      url: "https://www.coderhouse.com/certificados/634536cf2512cf000edfbfa2",
      imagen: certificadoReact,
    },
  ];

  return (
    <div className="info-container">
      <div className="info">
        {certificados.map((certificado, index) => (
          <div key={index} className="certificado">
            <h1 className="titleCertificado"></h1>
            <a href={certificado.url} target="_blank" rel="noopener noreferrer">
              <img
                className="desarrolloWeb"
                src={certificado.imagen}
                alt={certificado.nombre}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Info;
