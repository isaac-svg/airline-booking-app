import { isAuthorized } from "../services/getprofile";

async function authenticate() {
  if (!(await isAuthorized())) {
    // window.location.href = "http://localhost:5173/src/pages/login.html";
    window.location.href = "http://localhost:5173/src/pages/login.html";
  }
}
authenticate();
