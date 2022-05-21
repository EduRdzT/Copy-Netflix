import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Search from "../components/search";

const SearchLink = () => {
  let refLink = useRef();

  return (
    <div>
      <Search refLink={refLink} />
      <Link to="/search" style={{ display: "none" }} ref={refLink}>
        Search
      </Link>
    </div>
  );
};

export default SearchLink;
