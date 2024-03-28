import { isAuthorized } from "./getprofile";

export const BookFlight = () => {
  isAuthorized()
    .then((data) => {
      if (!data) {
        window.location.href = "http://localhost:5173/src/pages/login.html";
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
    const toastsuccess = document.querySelector("#toast-success");
    const toastdanger = document.querySelector("#toast-danger");

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
      const res = await fetch("http://localhost:9000/ticket/book", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ ...payload }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      if (data) {
        localStorage.setItem("ticket", JSON.stringify(data));
        toastsuccess.classList.remove("hidden");
        toastsuccess.classList.add("flex");
        console.log(" login href has hit here");
        await (async () =>
          setTimeout(() => {
            toastsuccess.classList.add("hidden");
            toastsuccess.classList.remove("flex");
            window.location.href =
              "http://localhost:5173/src/pages/ticket.html";
          }, 1000))();
      }
    } catch (error) {
      console.log(error);
    }
  });
};
BookFlight();
