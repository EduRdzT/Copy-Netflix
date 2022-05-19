// import React from "react";

/* export const Dropdown = ({drop_wrapper, menu_wrapper}) => {
  return (
    <div>Dropdown</div>
  )
} */

let closeTempo;

export function isMenu(closet, isPermiss, drop) {
  if (isPermiss) return;
  if (closet.type === "mouseenter") {
    clearTimeout(closeTempo);
    drop.current.removeAttribute("style");
  } else if (closet.type === "mouseleave") {
    closeTempo = setTimeout(() => {
      drop.current.style.display = "none";
    }, 300);
  }
}
