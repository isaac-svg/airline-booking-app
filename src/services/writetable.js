import { TableRow } from "../components/table/row";
import { tableData } from "../lib/ticketlist";
import { getTableData } from "./gettabledata";
console.log(tableData, "tableDatatableDatatableData");
function createNodeElement(node) {
  const nodeDiv = document.createElement("tr");
  // "code:"""
  nodeDiv.classList.add([
    "bg-white",
    "dark:bg-gray-800",
    "border-b",
    "dark:border-gray-700",
    "hover:bg-gray-50",
    "dark:hover:bg-gray-600",
  ]);
  nodeDiv.innerHTML = node;
  return nodeDiv;
}
// code: "";
export async function displayLinkedList() {
  const linkedListDiv = document.querySelector("tbody");
  const data = await getTableData();
  linkedListDiv.innerHTML = "";
  tableData.addbulk(await getTableData());
  let current = tableData.head;
  while (current !== null) {
    linkedListDiv.appendChild(createNodeElement(TableRow({ ...current })));

    current = current.next;
  }
}
