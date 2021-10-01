import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "real estate",
      title: "Real Estate",
    },
    {
      id: "finance",
      title: "Finance",
    },
    {
      id: "travel",
      title: "Travel",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1> Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://www.linkpicture.com/q/Screen-Shot-2021-09-30-at-4.17.12-PM.png"
            alt=""
          />
          <h3>Crypto App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.linkpicture.com/q/Screen-Shot-2021-09-30-at-4.17.12-PM.png"
            alt=""
          />
          <h3>Crypto App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.linkpicture.com/q/Screen-Shot-2021-09-30-at-4.17.12-PM.png"
            alt=""
          />
          <h3>Crypto App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.linkpicture.com/q/Screen-Shot-2021-09-30-at-4.17.12-PM.png"
            alt=""
          />
          <h3>Crypto App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.linkpicture.com/q/Screen-Shot-2021-09-30-at-4.17.12-PM.png"
            alt=""
          />
          <h3>Crypto App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.linkpicture.com/q/Screen-Shot-2021-09-30-at-4.17.12-PM.png"
            alt=""
          />
          <h3>Crypto App</h3>
        </div>
      </div>
    </div>
  );
}
