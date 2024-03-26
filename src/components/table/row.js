export const TableRow = ({
  username,
  flightcode,
  originCountry,
  destinationCountry,
  departureTime,
  departureDate,
  price,
  terminal,
  gate,
  seatPreference,
  returndate,
  returnTime,
}) => {
  //
  return `

 
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </td>
                <td
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                ${username}
                </td>
                <td class="px-6 py-4">${flightcode}</td>
                <td class="px-6 py-4">${originCountry}</td>
                <td class="px-6 py-4"> ${destinationCountry} </td>
                <td class="px-6 py-4"> ${departureTime}</td>
                <td class="px-6 py-4"> ${departureDate} </td>
                <td class="px-6 py-4"> ${returndate ?? "one way"} </td>
                <td class="px-6 py-4"> ${returnTime ?? "one way"} </td>

                <td class="px-6 py-4"> ${price} </td>

                <td class="px-6 py-4"> ${terminal}</td>
                <td class="px-6 py-4">${gate} </td>
                <td class="px-6 py-4">${seatPreference}</td>

                <td class="flex items-center px-6 py-4">
                  <button
                   
                    id="cancelflightbtn"
                    class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >cancel</button
                  >
                </td>
    `;
};
