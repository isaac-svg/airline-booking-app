import { isAuthorized } from "../services/getprofile";

async function authenticate() {
  if (!(await isAuthorized())) {
    // window.location.href = "https://airline-booking-app.vercel.app/src/pages/login.html";
    window.location.href =
      "https://airline-booking-app.vercel.app/src/pages/login.html";
  }
}
authenticate();
