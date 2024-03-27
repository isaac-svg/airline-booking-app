import { isAuthorized } from "./getprofile";

export const BookFlight = () => {
  isAuthorized()
    .then((data) => {
      if (!data) {
        window.location.href =
          "https://airticket-booking-app-orcin.vercel.app/src/pages/login.html";
        return;
      }
    })
    .catch((e) => {
      console.log(e.message);
    });
  const form = document.querySelector("#bookform");
  const bookfromEl = document.querySelector("#bookfrom");
  const booktoEL = document.querySelector("#bookto");
  const airlineEL = document.querySelector("#airlines");

  const onewaydatepicker = document.querySelector(
    '[data-datepicker="datepicker"]'
  );

  const timeEl = document.querySelector("#booktime");

  const flightplan = document.querySelector("#flightplan");
  const sendmessage = document.querySelector("#sendmessage");
  const tokenfield = document.querySelector("#tokenfield");
  console.log(flightplan, sendmessage);
  form?.addEventListener("submit", async (e) => {
    if (!e.isTrusted) return;
    e.preventDefault();

    const sourceCountry = bookfromEl.value.trim();
    const destinationCountry = booktoEL.value.trim();
    const airline = airlineEL.value.trim();
    const departureDate = onewaydatepicker.value.trim();
    const departureTime = timeEl.value.trim();
    const token = tokenfield.value.trim();

    const localPayload = localStorage.getItem("userPayload") ?? "{}";
    console.log(departureDate);
    const userPayload = JSON.parse(localPayload);
    const payload = {
      originCountry: sourceCountry,
      destinationCountry,
      departureTime,
      airline,
      flightcode: token,
      departureDate,
      price: "120",
      userData: {
        ...userPayload,
      },
    };
    console.log(payload);
    try {
      const res = await fetch(
        "https://airticket-booking-webserver.vercel.app/ticket/book",
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({ ...payload }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log(data);
      if (data) {
        localStorage.setItem("ticket", JSON.stringify(data));
      }
    } catch (error) {
      console.log(error);
    }
  });
};
BookFlight();
