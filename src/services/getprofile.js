export const isAuthorized = async () => {
  try {
    const response = await fetch(
      "https://airticket-booking-app-orcin.vercel.app/auth/profile",
      {
        credentials: "include",
      }
    );
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
