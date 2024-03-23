export const TripLocation = (imgsrc = "", location = "explore") => `
<div>
<div>

</div>
</div>
<div class="flex flex-col md:flex-row gap-4 flex-auto  bg-white shadow-lg rounded-lg h-fit">
            <div class="rounded-md overflow-hidden w-full md:w-16 h-24 md:h-14">
              <img
                src=${imgsrc}
                alt=${location}
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-1">
              <span class="block text-gray-600">Istanbul - Turkey </span>
              <span class="text-sm"> Hotel, Flights, Resort</span>
            </div>
          </div>
`;
