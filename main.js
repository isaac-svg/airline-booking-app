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

const initApp = () => {
  initTWE({ Dropdown, Ripple, Carousel, Collapse });
  const path = window.location.pathname;

  let content;

  switch (path) {
    case "/":
      content = Home();
      break;
    case "/login":
      content = LoginPage();
      // LoginUser();
      break;
    case "/register":
      content = Register();
      break;
    case "/book":
      content = Book();
      break;
    case "/list":
      content = Table();
      break;
    default:
      content = "404 Not Found";
  }

  document.querySelector("#app").innerHTML = content;
  try {
    LoginUser();
    RegisterUser();
    BookFlight();
    getTableData();
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", initApp);
