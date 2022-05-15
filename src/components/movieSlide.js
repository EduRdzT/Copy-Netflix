import React, { useRef } from "react";

const MovieSlide = ({ moviesHeight, index }) => {
  let refNext = useRef(null),
    refPrev = useRef();
  var scrollMovies = 0;

  const handleNextPrev = (e) => {
    const Btn = e.target.id ? e.target.id : e.target.parentElement.id,
      genre =
        e.target.className.length < 5
          ? e.target.className
          : e.target.parentElement.className,
      $movies = document.querySelector(`#${genre}`),
      $img = $movies.querySelector("img").offsetWidth;

    if (Btn === "next") {
      scrollMovies = scrollMovies + 8 * 5 + $img * 5;
    } else if (Btn === "prev") {
      scrollMovies = scrollMovies - 8 * 5 - $img * 5;
    }

    if (scrollMovies > 3300) {
      refNext.current.style.display = "none";
    } else {
      refNext.current.style.display = "block";
    }

    if (scrollMovies > 100) {
      refPrev.current.style.display = "block";
    } else {
      refPrev.current.style.display = "none";
    }

    $movies.scrollTo({
      behavior: "smooth",
      left: scrollMovies,
    });
  };

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
        className={"id" + index}
        ref={refNext}
        onMouseEnter={handleBtnEnter}
        onMouseLeave={handleBtnLeave}
        onClick={handleNextPrev}
        style={{ height: `${moviesHeight}px` }}
      >
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>
      <button
        id="prev"
        className={"id" + index}
        ref={refPrev}
        onMouseEnter={handleBtnEnter}
        onMouseLeave={handleBtnLeave}
        onClick={handleNextPrev}
        style={{ height: `${moviesHeight}px` }}
      >
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
    </>
  );
};

export default MovieSlide;
