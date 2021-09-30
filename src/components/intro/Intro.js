import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Web Developer", "Software Engineer", "Full Stack Developer"],
    });
  }, [""]);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="collection/Me.jpeg" alt=" " />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey! I'm, </h2>
          <h1> Kevin Rodriguez </h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="collection/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
