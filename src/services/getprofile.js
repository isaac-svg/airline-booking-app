export const isAuthorized = async (
  endpoint = "http://localhost:9000/auth/profile"
) => {
  try {
    const response = await fetch(endpoint, {
      credentials: "include",
    });
    const data = await response.json();
    if (!data) {
      window.location.href = "http://localhost:5173/src/pages/book.html";
      return false;
    }
    console.log(data, "data");
    return data.success;
  } catch (error) {
    console.log(error);
    window.location.href = "http://localhost:5173/src/pages/book.html";
    return;
  }
};
isAuthorized();
