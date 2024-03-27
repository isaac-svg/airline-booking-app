import { isAuthorized } from "./getprofile";
import { displayLinkedList } from "./writetable";

export const getTableData = async () => {
  isAuthorized("https://airline-booking-webserver.vercel.app/ticket/table")
    .then((data) => {
      if (!data) {
        window.location.href =
          "https://airline-booking-app.vercel.app/src/pages/login.html";
        return;
      }
    })
    .catch((e) => {
      console.log(e.message);
    });
  try {
    const response = await fetch(
      "https://airline-booking-webserver.vercel.app/all",
      {
        credentials: "include",
      }
    );

    const data = await response.json();
    console.log(data, "fresh fromserver");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
