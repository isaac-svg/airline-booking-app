import "./style.css";
import { Dropdown, Ripple, initTWE, Carousel, Collapse } from "tw-elements";

initTWE({ Collapse });
const initApp = async () => {
  initTWE({ Dropdown, Ripple, Carousel, Collapse });
};

document.addEventListener("DOMContentLoaded", initApp);
