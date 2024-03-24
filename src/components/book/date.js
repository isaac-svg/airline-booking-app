export const DateField = (data = "empty") => `

 <div class="max-w-sm mr-auto">
                  <label
                    for="departuredate"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Select Date</label
                  >
                     <input type="date" data-datepicker=${data} name="date-picker" id="departuredate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
        
`;
