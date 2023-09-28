import coverVideo from "../../media/coverVideo3.mp4";
import githubBlue from "../../media/icons/githubBlue.png";
import linkedin from "../../media/icons/linkedin.png";

import "./Cover.css";

export const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <div className="containerNameTittle">
        <h2 className="nameBurini">BURINI BRAIAN</h2>
        <p className="tittleFront"> FRONT-END DEVELOPER</p>
        <a href="https://github.com/burinib" target="_blank" rel="noreferrer">
          <img src={githubBlue} alt="" style={{ width: "36px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/braian-burini-a440501a8/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedin}
            alt="Bo
          otstrap Logo"
            style={{ width: "36px", marginLeft: "20px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Cover;
