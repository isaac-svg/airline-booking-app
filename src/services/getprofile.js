export const isAuthorized = async (
  endpoint = "https://airticket-booking-webserver-one.vercel.app//auth/profile"
) => {
  try {
    const response = await fetch(endpoint, {
      credentials: "include",
    });
    const data = await response.json();
    if (!data) {
      window.location.href =
        "https://airticket-booking-app-orcin.vercel.app/src/pages/book.html";
      return false;
    }
    console.log(data, "data");
    return data.success;
  } catch (error) {
    console.log(error);
    window.location.href =
      "https://airticket-booking-app-orcin.vercel.app/src/pages/book.html";
    return;
  }
};
isAuthorized();
