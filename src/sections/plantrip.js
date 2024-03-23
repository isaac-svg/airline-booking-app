import { TripLocation } from "../components/triplocation";

const locations = [];

export const PlanTrip = () => `

<div class="border shadow-primary-1  h-fit w-full mt-[8rem] flex flex-wrap gap-4 flex-grow p-4 bg-slate-200">
          ${TripLocation("/images/loc1.jpg")}
          ${TripLocation("/images/loc2.jpg")}
          ${TripLocation("/images/loc3.jpg")}
          ${TripLocation("/images/loc4.jpg")}
          ${TripLocation("/images/loc5.jpg")}
          ${TripLocation("/images/loc6.jpg")}
          ${TripLocation("/images/loc7.jpg")}
          ${TripLocation("/images/loc8.jpg")}
          
        </div>

`;
