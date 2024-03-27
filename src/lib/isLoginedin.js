import { isAuthorized } from "../services/getprofile";

async function authenticate() {
  if (!(await isAuthorized())) {
    window.location.href =
      "https://airticket-booking-app-orcin.vercel.app/src/pages/login.html";
  }
}
await authenticate();
