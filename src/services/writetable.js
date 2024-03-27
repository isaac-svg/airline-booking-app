import { TableRow } from "../components/table/row";
import { tableData } from "../lib/ticketlist";
import { getTableData } from "./gettabledata";
console.log(tableData, "tableDatatableDatatableData");
function createNodeElement(node) {
  const nodeDiv = document.createElement("tr");

  nodeDiv.innerHTML = node;
  return nodeDiv;
}
// code: "";
export async function displayLinkedList() {
  const linkedListDiv = document.querySelector("tbody");
  console.log(linkedListDiv, "linkedListDiv");
  linkedListDiv.innerHTML = "";
  tableData.addbulk(await getTableData());
  let current = tableData.head;
  let count = 0;
  while (current.next !== null) {
    console.log("count is: ", count++);
    linkedListDiv.appendChild(createNodeElement(TableRow({ ...current })));

    console.log(current, "this is current: ", count);
    current = current.next;
  }
}
