export const isAuthorized = async (endpoint) => {
  const response = await fetch(endpoint, {
    credentials: "include",
  });
  const data = await response.json();

  console.log(data, "data");
  return data.success;
};
