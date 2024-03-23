export const SeatField = () => `


<div class="relative z-0 w-full mb-5 group">
                <div class="max-w-sm mx-auto">
                  <label
                    for="prefferedseating"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Preffered seating</label
                  >
                  <select
                    id="prefferedseating"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected value="Window">Window</option>
                    <option value="Aisle">Aisle </option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>`;
