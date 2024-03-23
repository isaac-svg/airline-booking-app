export const BookFlight = () => {
  const form = document.querySelector("#bookform");
  const bookfromEl = document.querySelector("#bookfrom");
  const booktoEL = document.querySelector("#bookto");
  const airlineEL = document.querySelector("#airlines");
  const prefferedseatingEl = document.querySelector("#prefferedseating");
  const datepickerEL = document.querySelector(
    '[data-datepicker="onewaydatepicker"]'
  );
  const returntripDatepicker = document.querySelector(
    '[data-datepicker="multiwaydatepicker"]'
  );
  const timeEl = document.querySelector("#booktime");
  const onewayPreffered = document.querySelector("#bordered-radio-1");
  const multiwayPreffered = document.querySelector("#bordered-radio-2");
  const returnaffirmationsection = document.querySelector(
    "#returnaffirmationsection"
  );

  const tokenfield = document.querySelector("#tokenfield");
  console.log(tokenfield);
};
