import { DateField } from "./date";

export const ReturnAffirmField = () => `
  <div class="grid md:grid-cols-2 md:gap-6" id="returnaffirmationsection">
              ${DateField("multiwaydatepicker")}
              <!-- time -->
              <div class="relative z-0 w-full mb-5 group">
                <div class="max-w-sm mx-auto">
                  <label
                    for="returntime"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Select Time</label
                  >
                  <select
                    id="returntime"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
            </div>`;
