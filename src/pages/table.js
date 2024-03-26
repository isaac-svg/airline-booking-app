import { TableHead } from "../components/table/head";
import { TableRow } from "../components/table/row";
import { tableData } from "../lib/ticketlist";
import { getTableData } from "../services/gettabledata";

export const Table = () => {
  document.addEventListener("DOMContentLoaded", () => {
    getTableData();
  });
  return `
    
     <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <!-- head -->
            ${TableHead()}
            <tbody>
            <!-- logically draw table -->
              ${TableRow({
                username: "Isaac",
                departureDate: "12/12/12",
                departureTime: "12:00",
                destinationCountry: "USA",
                flightcode: "11222",
                gate: "12",
                originCountry: "Ghana",
                price: "120",
                returndate: "13/13/13",
                returnTime: "12:00",
                seatPreference: "Window",
                terminal: "3",
              })}
           
            
            </tbody>
          </table>
        </div>
    
    
  `;
};
