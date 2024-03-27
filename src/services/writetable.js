import { TableRow } from "../components/table/row";
import { tableData } from "../lib/ticketlist";
import { getTableData } from "./gettabledata";

function createNodeElement(node) {
  const nodeDiv = document.createElement("tr");
  // console.log(node, "node----------");
  nodeDiv.innerHTML = node;
  return nodeDiv;
}
// code: "";
console.log(tableData, "tableDta");
export async function displayLinkedList() {
  const linkedListDiv = document.querySelector("tbody");
  linkedListDiv.innerHTML = "";
  tableData.addbulk(await getTableData());
  let current = tableData.head;

  while (current != null) {
    linkedListDiv.appendChild(createNodeElement(TableRow({ ...current })));
    current = current.next;
  }
}
displayLinkedList();
