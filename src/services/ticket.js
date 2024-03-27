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
  const terminal = document.querySelector("#terminal");
  const gate = document.querySelector("#gate");
  const email = document.querySelector("#email");
  const cancel = document.querySelector("#cancel");
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
      const response = await fetch(
        "https://airticket-booking-webserver.vercel.app/ticket/delete",
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...ticket, ...userPayload }),
        }
      );
      const data = response.json();
      console.log(data);
    } catch (error) {}
  });
};
makeTicket();
