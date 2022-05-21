import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { isMenu } from "../components/dropdown";

const News = () => {
  let news = useRef();

  return (
    <div
      id="news"
      onMouseEnter={(e) => isMenu(e, news, "right")}
      onMouseLeave={(e) => isMenu(e, news, "right")}
    >
      <div data-dropdown>
        <span className="material-symbols-outlined">notifications</span>
      </div>
      <div className="wrapper invisible" ref={news}>
        <Link to="/YourAccount">Cuenta</Link>
        <Link to="/YourAccount">Cuenta</Link>
        <Link to="/YourAccount">Cuenta</Link>
        <Link to="/YourAccount">Cuenta</Link>
        <Link to="/YourAccount">Cuenta</Link>
      </div>
    </div>
  );
};

export default News;
