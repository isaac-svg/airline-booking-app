export const isAuthorized = async () => {
  const response = await fetch(
    "https://airticket-booking-app-orcin.vercel.app/auth/profile",
    {
      credentials: "include",
    }
  );
  const data = await response.json();

  console.log(data, "data");
  return data.success;
};
isAuthorized();
