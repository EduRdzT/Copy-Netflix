import React, { useRef } from "react";
import { isMenu } from "../components/dropdown";
import { New } from "../components/navbar-card";

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
        <New />
        <New />
        <New />
        <New />
        <New />
      </div>
    </div>
  );
};

export default News;
