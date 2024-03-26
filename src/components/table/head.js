export const TableHead = () => {
  return `<thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">User name</th>
                <th scope="col" class="px-6 py-3">flight code</th>
                <th scope="col" class="px-6 py-3">from</th>
                <th scope="col" class="px-6 py-3">to</th>
                <th scope="col" class="px-6 py-3">departure time</th>
                <th scope="col" class="px-6 py-3">departure date</th>
                <th scope="col" class="px-6 py-3">return date date</th><th scope="col" class="px-6 py-3">return time</th>
                <th scope="col" class="px-6 py-3">price</th>
                <th scope="col" class="px-6 py-3">Terminal</th>
                <th scope="col" class="px-6 py-3">Gate</th>

                <th scope="col" class="px-6 py-3">Seat</th>
                <th scope="col" class="px-6 py-3">Cancel</th>
              </tr>
            </thead>`;
};
