import { TableHead } from "../components/table/head";
import { TableRow } from "../components/table/row";
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
              ${TableRow(
                "username",
                "1212",
                "ghana",
                "usa",
                "12:00",
                "12/07/07",
                "130",
                "3",
                "12",
                "13"
              )}
            </tbody>
          </table>
        </div>
    
    
  `;
};
