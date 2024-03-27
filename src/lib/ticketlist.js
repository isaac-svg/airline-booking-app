/**
 * @class Node - Node of linked list
 *
 */
class Node {
  constructor({
    username,
    flightcode,
    originCountry,
    destinationCountry,
    isAreturnTrip,
    departureTime,
    departureDate,
    price,
    terminal,
    returntime,
    isValid,
    gate,
    seatPreference,
    _id,
    returndate,
    email,
  }) {
    this.username = username ?? "server did not bring it";
    this.flightcode = flightcode;
    this.email = email;
    this.originCountry = originCountry;
    this.destinationCountry = destinationCountry;
    this.departureDate = departureDate;
    this.departureTime = departureTime;
    this.price = price;
    this.terminal = terminal ?? "server did not bring it";
    this.gate = gate ?? "server did not bring it";
    this.seatPreference = seatPreference ?? "server did not bring it";
    this.next = null;
    this.isAreturnTrip = isAreturnTrip ?? "server did not bring it";
    this.isValid = isValid ?? "server did not bring it";
    this.returntime = returntime ?? "server did not bring it";
    this.returndate = returndate ?? "server did not bring it";
    this._id = _id ?? "server did not bring it";
  }
}

/**
 * @class LinkedList
 */

export class LinkedList {
  constructor() {
    this.head = null;
    this.rows = [];
    this.count = 0;
  }
  /**
   *
   * @param {Node} row The table raw data
   */
  addsingle(row) {
    let newNode = new Node(row);
    if (this.head === null) {
      // this.rows.push(newNode);
      this.head = newNode;
      this.count += 1;
      return;
    }
    let current = this.head;
    if (newNode.username <= current.username) {
      newNode.next = this.head;
      this.head = newNode;
      this.count += 1;
      // this.rows.push(current);
      return;
    }

    while (current.next !== null && newNode.username >= current.username) {
      current = current.next;
      console.log("add single");
    }
    if (current.next === null) {
      this.count += 1;
      current.next = newNode;
    } else {
      newNode.next = current.next;
      current.next = newNode;
      this.count += 1;
    }
    // this.rows.push(current);
  }

  /**
   * @param {Node[]} rows
   */
  addbulk(data = []) {
    this.head = null;
    for (const key of data) {
      this.addsingle(key);
    }
  }

  delete(key) {
    if (!this.head) return;
    let current = this.head;
    if (current.username === key) {
      this.head = current.next;
      this.count -= 1;
      return;
    }
    while (current.next !== null && current.username !== key) {
      current = current.next;
    }
    if (current.next !== null) {
      current.next = current.next.next;
      this.count -= 1;
    }
  }
  print() {
    let current = this.head;
    while (current.next !== null) {
      console.log(current, "print");
      current = current.next;
    }
  }
}

const TableData = (function () {
  let instance;

  function init() {
    return new LinkedList();
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

export const tableData = TableData.getInstance();
// console.log(tableData, "tableData");
