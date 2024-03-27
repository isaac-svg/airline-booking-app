import { displayLinkedList } from "./writetable";

export const getTableData = async () => {
  try {
    const response = await fetch(
      "https://airticket-booking-app-orcin.vercel.app/all"
    );

    const data = await response.json();
    console.log(data, "fresh fromserver");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
