import React, { useRef } from "react";

const MovieSlide = ({ moviesHeight }) => {
  let refNext = useRef(null),
    refPrev = useRef();

  const handleBtnEnter = () => {
    refNext.current.firstElementChild.style.display = "block";
    refPrev.current.firstElementChild.style.display = "block";
  };

  const handleBtnLeave = () => {
    refNext.current.firstElementChild.removeAttribute("style");
    refPrev.current.firstElementChild.removeAttribute("style");
  };

  return (
    <>
      <button
        id="next"
        ref={refNext}
        onMouseEnter={handleBtnEnter}
        onMouseLeave={handleBtnLeave}
        style={{ height: `${moviesHeight}px` }}
      >
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>
      <button
        id="prev"
        ref={refPrev}
        onMouseEnter={handleBtnEnter}
        onMouseLeave={handleBtnLeave}
        style={{ height: `${moviesHeight}px` }}
      >
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
    </>
  );
};

export default MovieSlide;
