import { CarouselEl } from "../components/carousel";
import { Hero } from "../components/hero";
import { InputFiledWrapper } from "../components/input-field_wrapper";
import { ReturnTrip } from "../components/returnselect";
import { TripForm } from "../components/tripform";
import { Footer } from "../sections/footer";
import { PlanTrip } from "../sections/plantrip";
export const Home = () => {
  return `
  
   <div class="relative bg-slate-200">
   ${Hero()}
   ${TripForm()}
    </div>
    ${PlanTrip()}
    <div class="h-52 ">
    <h3 class="text-center text-2xl p-4 ">Explore with us</h3>
    ${CarouselEl()}
    ${Footer()}
    </div>
  `;
};
