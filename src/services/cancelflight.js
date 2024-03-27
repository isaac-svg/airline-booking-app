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
      console.log(table, "table");
      const row = e.target.closest("tr");
      const cells = row.querySelectorAll("td");
      const flightcode = cells[6]?.textContent;
      // const userData = { flightcode, username };
      let extractUsername = row.querySelector("td:first-child");
      console.log(flightcode, "flightcode");

      e.preventDefault();

      if (e.target.id !== "cancelflightbtn") {
        console.log("clicked somwhere");
        return;
      }

      if (e.target.id == "cancelflightbtn") {
        console.log("clicked action");
        const row = e.target.closest("tr");
        const cells = row.querySelectorAll("td");
        const flightcode = cells[6]?.textContent.replace("\n", "").trim();
        let extractUsername = row.querySelector("td:first-child");
        const part = extractUsername.textContent
          .trim()
          .split(" ")
          .filter((e) => e != "" && e != "\n");
        const firstname = part[1];
        const lastname = part[2].replace("\n", "");
        const username = `${firstname} ${lastname}`;
        const userData = { flightcode, username };

        const response = await fetch(
          "https://airticket-booking-app-orcin.vercel.app/ticket/cancel",
          {
            method: "DELETE",
            body: JSON.stringify({ ...userData }),
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const payload = await response.json();
        console.log(payload);
        if (payload.success) {
          tableData.delete(username.trim());
          const toast = document.querySelector("#toast-success");
          const toastmessage = document.querySelector("#toast-message");

          toastmessage.textContent = "Flight canceled";
          toast.classList.remove("hidden");
          toast.classList.add("flex");
          await (async () =>
            setTimeout(() => {
              toast.classList.add("hidden");
              toast.classList.remove("flex");
            }, 1000))();

          displayLinkedList();
          return;
        }
        alert("Deletion failed");
      }
    });
    // perform linked list update
  } catch (error) {}
};
CancelFlight();
