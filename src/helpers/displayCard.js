let $figcaption;

export const visibleCard = (el) => {
  if (el.target.nextElementSibling.matches("figcaption")) {
    $figcaption = el.target.nextElementSibling;
  } else {
    $figcaption = el.target.lastElementChild;
  }
  if (window.innerWidth > 570) {
    const screemWidth = el.target.getBoundingClientRect();
    if (screemWidth.right + 100 > window.innerWidth) {
      $figcaption.style.transform =
        "perspective(200px) translate3d(-4vh, -200px, 40px)";
    }
    if (screemWidth.left < 100) {
      $figcaption.style.transform =
        "perspective(200px) translate3d(3vh, -200px, 40px)";
    }
  }
  $figcaption.classList.remove("invisible");
};

export const hiddenCard = () => {
  $figcaption.classList.add("invisible");
  $figcaption.removeAttribute("style");
};
