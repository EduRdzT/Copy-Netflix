let closeTempo,
  dropDown = false;

export function isMenu(closet, drop, position, isPermiss = false) {
  if (isPermiss) return;
  if (closet.type === "mouseenter") {
    let positionCloset = closet.target.getBoundingClientRect();
    let screemWidth = window.innerWidth;
    if (!dropDown) {
      drop.current.classList.remove("invisible");
    } else if (dropDown !== drop) {
      drop.current.classList.remove("invisible");
      dropDown.current.classList.add("invisible");
    } else {
      clearTimeout(closeTempo);
    }
    if (
      closet.target.hasAttribute("data-dropdown") ||
      closet.target.parentNode.hasAttribute("data-dropdown")
    ) {
      if (position === "right") {
        drop.current.style.right = `${
          screemWidth - positionCloset.right - positionCloset.width / 2
        }px`;
      } else if (position === "midlle") {
        let elementWidth = drop.current.getBoundingClientRect();
        var distancia = positionCloset.left - elementWidth.width / 2;
        drop.current.style.left = `${distancia < 0 ? 0 : distancia}px`;
      }
    } else {
      clearTimeout(closeTempo);
      drop.current.classList.remove("invisible");
    }
  } else if (closet.type === "mouseleave") {
    dropDown = drop;
    closeTempo = setTimeout(() => {
      drop.current.classList.add("invisible");
      dropDown = false;
    }, 250);
  }
}
