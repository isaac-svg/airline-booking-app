// Initialization for ES Users
import { Ripple, Input, initTWE } from "tw-elements";
import { InputFiledWrapper } from "./input-field_wrapper";
import { SourceToDestination } from "./destination";
import { ReturnTrip } from "./returnselect";
import { DatePicker } from "./datepicker";
import { PassengerClass } from "./passengerclass";
import { TripFormBottom } from "./tripformbottom";

initTWE({ Ripple, Input });

export const TripForm =
  () => `<div class="absolute rounded-lg bg-white shadow-2 -bottom-1/3 -translate-x-1/2 left-1/2 h-44 w-[90%] p-2 flex flex-col gap-4">
 <!-- top -->
    <div class="flex gap-4 items-center">
    <button class="flex gap-1 items-center border-r-2 pr-2 pb-2 focus-within:border-b-2 focus-within:border-b-green-600"> 
     <span class="material-symbols-outlined text-black">
                  flight_takeoff
    </span>
    <p>flights</p>
    </button>
    <button class="flex gap-1 items-center pr-2 pb-2 focus-within:border-b-2 focus-within:border-b-green-600"> 
     <span class="material-symbols-outlined text-black">
                  flight_takeoff
    </span>
    <p>stays</p>
    </button>
    </div>
<!-- input fieldss -->

<div class="flex items-center justify-between gap-1">
${SourceToDestination()}
${ReturnTrip()}
${DatePicker()}
${PassengerClass()}
</div>

${TripFormBottom()}

</div>`;
