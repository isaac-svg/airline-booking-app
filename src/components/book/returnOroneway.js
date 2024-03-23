export const ReturnOrOnewayField = () => `

        <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <div
                  class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700"
                >
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    checked
                    name="bordered-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >One way</label
                  >
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <div
                  class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700"
                >
                  <input
                    id="bordered-radio-2"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-2"
                    class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Return</label
                  >
                </div>
              </div>
            </div>`;
