import React, { useEffect, useRef, useState } from "react";

const initial = { search: "" };

const Search = ({ refLink }) => {
  const [visible, setVisible] = useState(false);
  const [fullForm, setFullForm] = useState(true);
  const [isBan, setIsBan] = useState(true);
  const [form, setForm] = useState(initial);
  let refInput = useRef(),
    refClean = useRef(),
    refMenu = useRef();

  const handleBlur = () => {
    if (fullForm) {
      setTimeout(() => setVisible(false), 300);
    }
  };

  const handleChange = (e) => {
    setForm({
      [e.target.name]: e.target.value,
    });
  };

  const handleBtn = () => {
    setForm(initial);
    refInput.current.focus();
  };

  useEffect(() => {
    if (!refClean.current) return;
    if (form.search.length) {
      refClean.current.style.visibility = "visible";
      setFullForm(false);
      if (isBan) {
        refMenu.current.classList.remove("active");
        refLink.current.click();
        setIsBan(false);
      }
    } else {
      refClean.current.style.visibility = "hidden";
      refMenu.current.classList.add("active");
      refMenu.current.click();
      setFullForm(true);
      setIsBan(true);
    }
  }, [form, isBan, refLink]);

  useEffect(() => {
    if (visible) {
      refInput.current.focus();
      refClean.current.style.display = "block";
      refMenu.current = document.querySelector(".active");
    }
  }, [visible]);

  return (
    <>
      {visible ? (
        <div className="container-search">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            ref={refInput}
            onBlur={handleBlur}
            placeholder="Titulos, personas, géneros"
            name="search"
            value={form.search}
            onChange={handleChange}
          />
          <span
            className="material-symbols-outlined"
            style={{ visibility: "hidden", display: "none" }}
            ref={refClean}
            onClick={handleBtn}
          >
            close
          </span>
        </div>
      ) : (
        <button id="search" onClick={() => setVisible(true)}>
          <span className="material-symbols-outlined">search</span>
        </button>
      )}
    </>
  );
};

export default Search;
