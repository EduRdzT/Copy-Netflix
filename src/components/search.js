import React, { useEffect, useRef, useState } from "react";

const Search = () => {
  const [visible, setVisible] = useState(false);
  let refInput = useRef(),
    refBtn = useRef();

  useEffect(() => {
    if (visible) {
      refInput.current.focus();
    } else {
      document.querySelector(".active").focus();
    }
  }, [visible]);

  return (
    <>
      {visible ? (
        <input type="search" ref={refInput} onBlur={() => setVisible(false)} />
      ) : (
        <button id="search" onClick={() => setVisible(true)}>
          <span className="material-symbols-outlined" ref={refBtn}>
            search
          </span>
        </button>
      )}
    </>
  );
};

export default Search;
