export const isAuthorized = async () => {
  const response = await fetch("http://localhost:9000/auth/profile", {
    credentials: "include",
  });
  const data = await response.json();

  console.log(data, "data");
  return data.success;
};
isAuthorized();
