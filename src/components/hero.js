import { Navbar } from "./navbar";
import { HeroWelcome } from "./welcome";

export const Hero = () => `



<div
    class="relative w-[97%] mx-auto rounded-md  h-80 md:h-96 bg-cover mt-[1.5%] bg-slate-200"
          style="background-image: url(/images/banner.jpg)"
        >
          <!-- navbar -->
          ${Navbar()}
          <-- <div class="relative h-max"> --> 
            
          <!-- Welcome section -->
            ${HeroWelcome()}
            
            <-- </div> -->
            </div>
`;
