import emailjs from "emailjs-com";
import "./Footer.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import whatsapp from "../../media/icons/Whatsapp.png";
import githubBlue from "../../media/icons/githubBlue.png";
import linkedin from "../../media/icons/linkedin.png";
import Aos from "aos";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    mail: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nombre: values.name,
      msg: values.content,
      mail: values.mail,
      reply_to: "braianb55@hotmail.com",
    };

    if (values.name && values.mail && values.content) {
      emailjs
        .send("your_service_id", "your_template_id", data, "your_user_id")
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire("El correo se ha enviado de forma exitosa");
          },
          (error) => {
            console.log(error.text);
            Swal.fire("Ocurrió un problema al enviar el correo");
          }
        );
    } else {
      Swal.fire(
        "Debe completar todos los campos para enviar el mensaje. Gracias!"
      );
    }
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="contact" className={"contact footer"}>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className={"input"}
          type="text"
          name="name"
          id="1"
          value={values.name}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          className={"input"}
          type="mail"
          name="mail"
          id="2"
          value={values.mail}
          onChange={handleChange}
          placeholder="Mail"
        />

        <input
          className={"input"}
          type="text"
          name="content"
          id="3"
          value={values.content}
          onChange={handleChange}
          placeholder="Dejame tu mensaje..."
        />
        <button className="button" type="submit">
          Send
        </button>
      </form>
      <div className="container_whatsapp">
        <a
          data-aos-offset="200"
          data-aos="fade-right"
          href="https://api.whatsapp.com/send?phone=3329565250"
          target="_blank"
          rel="noreferrer"
        >
          <div className="container_2_whatsapp">
            <img src={whatsapp} alt="" style={{ width: "36px" }} />
            <h1>Send watsap</h1>
          </div>
        </a>
        <a
          data-aos="fade-up"
          href="https://www.linkedin.com/in/braian-burini-a440501a8/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="container_2_whatsapp">
            <img src={linkedin} alt="" style={{ width: "36px" }} />
            <h1>visit my linkendin</h1>
          </div>
        </a>
        <a
          data-aos="fade-left"
          href="https://github.com/burinib"
          target="_blank"
          rel="noreferrer"
        >
          <div className="container_2_whatsapp">
            <img src={githubBlue} alt="" style={{ width: "36px" }} />
            <h1>visit my github</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
