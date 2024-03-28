import { isAuthorized } from "./getprofile";
import { displayLinkedList } from "./writetable";

export const getTableData = async () => {
  try {
    const response = await fetch("http://localhost:9000/all", {
      credentials: "include",
    });

    const data = await response.json();
    console.log(data, "fresh fromserver");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
