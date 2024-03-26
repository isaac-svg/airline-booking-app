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

const initApp = async () => {
  initTWE({ Dropdown, Ripple, Carousel, Collapse });
  const path = window.location.pathname;

  let content;

  switch (path) {
    case "/":
      content = Home();
      break;
    case "/login":
      content = LoginPage();
      break;
    case "/register":
      content = Register();
      break;
    case "/book":
      const isValidity = await isAuthorized(
        "http://localhost:9000/auth/profile"
      );
      if (isValidity) {
        content = Book();
        break;
      }
      content = LoginPage();
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
    displayLinkedList();
    CancelFlight();
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", initApp);
