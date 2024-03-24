export const BookFlight = () => {
  const form = document.querySelector("#bookform");
  const bookfromEl = document.querySelector("#bookfrom");
  const booktoEL = document.querySelector("#bookto");
  const airlineEL = document.querySelector("#airlines");
  const prefferedseatingEl = document.querySelector("#prefferedseating");
  const onewaydatepicker = document.querySelector(
    '[data-datepicker="onewaydatepicker"]'
  );
  const returntripDatepicker = document.querySelector(
    '[data-datepicker="multiwaydatepicker"]'
  );
  const timeEl = document.querySelector("#booktime");
  const onewayPreffered = document.querySelector("#bordered-radio-1");
  const multiwayPreffered = document.querySelector("#bordered-radio-2");
  const returntime = document.querySelector("#returntime");

  const tokenfield = document.querySelector("#tokenfield");

  form?.addEventListener("submit", async (e) => {
    if (!e.isTrusted) return;
    e.preventDefault();

    const sourceCountry = bookfromEl.value.trim();
    const destinationCountry = booktoEL.value.trim();
    const airline = airlineEL.value.trim();
    const seatpreference = prefferedseatingEl.value.trim();
    const departureDate = onewaydatepicker.value.trim();
    const returndate = returntripDatepicker.value.trim();
    const departureTime = timeEl.value.trim();
    const prefersoneway = onewayPreffered.value.trim();
    const prefersmultiway = multiwayPreffered;
    const returnTime = returntime.value.trim();
    const token = tokenfield.value.trim();

    console.log(prefersmultiway);
    const localPayload = localStorage.getItem("userPayload") ?? "{}";
    const userPayload = JSON.parse(localPayload);
    const payload = {
      originCountry: sourceCountry,
      destinationCountry,
      departureTime,
      airline,
      seatpreference,
      code: token,
      departureDate,
      returntime: returnTime,
      returndate,
      prefersoneway,
      isAreturnTrip: prefersmultiway.checked,
      price: "120",
      userData: {
        ...userPayload,
      },
    };
    console.log(payload);
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
  });
};
