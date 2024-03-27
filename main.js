import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { Dropdown, Ripple, initTWE, Carousel, Collapse } from "tw-elements";
import { Home } from "./src/pages/home.js";
import { Book } from "./src/pages/book.js";
import { DatePickerFunction } from "./src/utils/datepicker.js";
import { Register } from "./src/pages/Register.js";
import { LoginPage } from "./src/pages/login.js";
import { RegisterUser } from "./src/services/register.js";
import { LoginUser } from "./src/services/login.js";
import { BookFlight } from "./src/services/book.js";
import { Table } from "./src/pages/table.js";
import { getTableData } from "./src/services/gettabledata.js";
import { isAuthorized } from "./src/services/getprofile.js";
import { displayLinkedList } from "./src/services/writetable.js";
import { CancelFlight } from "./src/services/cancelflight.js";
import { Ticket } from "./src/pages/ticket.js";

initTWE({ Collapse });
const initApp = async () => {
  initTWE({ Dropdown, Ripple, Carousel, Collapse });
  const path = window.location.pathname;

  // document.querySelector("#app").innerHTML = "lorem1-000";
  // const links = document.querySelectorAll("a");
  // links.forEach(l=>)
};

document.addEventListener("DOMContentLoaded", initApp);
