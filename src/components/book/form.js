import { DatePicker } from "../datepicker";
import { SourceToDestination } from "../destination";
import { PassengerClass } from "../passengerclass";
import { ReturnTrip } from "../returnselect";
import { TripLocation } from "../triplocation";
import { AirlineField } from "./airline";
import { DateField } from "./date";
import { DestinationField } from "./destination";
import { BookFrom } from "./from";
import { ReturnAffirmField } from "./return";
import { ReturnOrOnewayField } from "./returnOroneway";
import { SeatField } from "./seat";
import { SubmitBtn } from "./submitbtn";
import { TimeField } from "./time";
import { TokenField } from "./token";

export const BookForm = () => `
 <div class="my-auto  grid content-center mt-20 mb-20">
          <form class="max-w-md mx-auto border" id="bookform">
            <!-- 4 -->
            <div class="grid md:grid-cols-2 md:gap-6">
              <!-- from was here -->
              ${BookFrom()}
              <!-- to was here -->
              ${DestinationField()}
            </div>
            <!-- 5 -->
            <div class="grid md:grid-cols-2 md:gap-6">
              <!-- airline -->
              ${AirlineField()}
              ${SeatField()}
            </div>
            <!-- 6 -->
            <div class="grid md:grid-cols-2 md:gap-6">
            <!-- date picker element -->
              ${DateField()}      <!-- time -->
              ${TimeField()}
            </div>
            <!-- return or one way-->
            ${ReturnOrOnewayField()}
            <!-- 8 -->
            ${ReturnAffirmField()}
            <!-- 9 token -->
            ${TokenField()}
            <!-- 10 button -->
            ${SubmitBtn()}
          </form>
        </div>

`;
