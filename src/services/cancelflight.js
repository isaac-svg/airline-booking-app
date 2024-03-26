import { tableData } from "../lib/ticketlist";
import { displayLinkedList } from "./writetable";
/**
 *
 * @param {string} endpoint url endpoint
 * @param {{}} payload payload needed to cancel the request
 */

export const CancelFlight = async () => {
  try {
    // perform dom update
    const table = document.querySelector("tbody");

    table.addEventListener("click", async (e) => {
      e.preventDefault();

      if (e.target.id !== "cancelflightbtn") {
        console.log("clicked somwhere");
        return;
      }

      if (e.target.id == "cancelflightbtn") {
        console.log("clicked action");
        const rows = e.target.closest("tr");
        const cells = rows.querySelectorAll("td");
        const username = cells[1]?.textContent;
        const flightcode = cells[2]?.textContent;
        const userData = { flightcode, username };
        console.log(tableData.delete(username.trim()));
        const response = await fetch("http://localhost:9000/ticket/delete", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "DELETE",
          credentials: "include",
          body: JSON.stringify({ ...userData }),
        });
        const payload = await response.json();
        console.log(payload);
        displayLinkedList();
      }
    });
    // perform linked list update
  } catch (error) {}
};
