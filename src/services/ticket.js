export const makeTicket = () => {
  const ticketpayload = localStorage.getItem("ticket") ?? "{}";
  const ticket = JSON.parse(ticketpayload).payload;
  const userPayload = JSON.parse(localStorage.getItem("userPayload"));
  // if (Object.entries(ticket).length == 0) {
  //   return;
  // }

  const username = document.querySelector("#passengername");
  const usercode = document.querySelector("#passengercode");
  //   const confirmationcode = document.querySelector("#passengercode");
  const departuredate = document.querySelector("#departuredate");
  const departuretime = document.querySelector("#departuretime");
  const flightcode = document.querySelector("#flightcode");
  const price = document.querySelector("#price");
  const ticketform = document.querySelector("#ticket-container");
  const destinationcountry = document.querySelector("#destinationcountry");
  const toastsuccess = document.querySelector("#toast-success");
  const toastdanger = document.querySelector("#toast-danger");
  const terminal = document.querySelector("#terminal");
  const gate = document.querySelector("#gate");
  const email = document.querySelector("#email");
  const cancel = document.querySelector("#cancelticket");
  const print = document.querySelector("#print");
  username.value = userPayload.username;
  email.value = userPayload.email;
  flightcode.value = ticket?.flightcode;
  departuredate.value = ticket?.departureDate;
  departuretime.value = ticket?.departureTime;
  //   confirmationcode.value = ticket?.flightcode;
  destinationcountry.value = ticket?.destinationCountry;
  price.value = `$${ticket?.price}`;
  terminal.value = ticket?.terminal;
  gate.value = ticket?.gate;
  console.log(ticket);

  print.addEventListener("click", () => {
    window.print();
  });
  cancel.addEventListener("click", async (e) => {
    try {
      const response = await fetch("http://localhost:9000/ticket/cancel", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...ticket, ...userPayload }),
      });
      const data = response.json();
      console.log("data from ticket", data);
      if (data) {
        toastsuccess.classList.remove("hidden");
        toastsuccess.classList.add("flex");
        console.log(" login href has hit here");

        setTimeout(() => {
          toastsuccess.classList.add("hidden");
          toastsuccess.classList.remove("flex");
        }, 5000);
      }
      console.log(data);
    } catch (error) {
      toastdanger.classList.remove("hidden");
      toastdanger.classList.add("flex");
      console.log(" login href has hit here");
      await (async () =>
        setTimeout(() => {
          toastdanger.classList.add("hidden");
          toastdanger.classList.remove("flex");
        }, 4000))();
      console.log("I am hit");
    }
  });
};
makeTicket();
