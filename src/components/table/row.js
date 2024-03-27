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
  email,
  status,
  isValid,
}) => {
  //
  let rowcount = 0;
  console.log(rowcount++, "rowCount");
  // <tr>
  return `

 
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <p
                    class="flex justify-center items-center h-10 w-10 rounded-full bg-blue-700 text-white text-lg font-medium"
                  >
                    ${username?.[0]}
                  </p>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    ${username}
                  </div>
                  <div class="text-sm text-gray-500">
                    ${email}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">${originCountry}</div>
              <!-- <div class="text-sm text-gray-500">${destinationCountry}</div> -->
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              ${destinationCountry}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              ${departureTime}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              ${departureDate}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
  
            ${
              isValid
                ? `<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>`
                : `<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  Inactive
                </span>`
            }
              
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              ${flightcode}
            </td>

            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              
              <a href="#" id="cancelflightbtn" class="ml-2 text-red-600 hover:text-red-900"
                >cancel</a
              >
            </td>
            `;
  // </tr>
};
