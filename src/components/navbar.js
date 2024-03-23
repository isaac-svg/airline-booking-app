import { BurgerBtn } from "./button";
export const Navbar =
  () => `<nav class="w-full h-fit p-4 flex items-center justify-between bg-white shadow-sm">
            <!-- left -->
            <ul class="hidden md:flex items-center gap-5 text-white">
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-white">
                  flight_takeoff
                </span>
                <p>find flight</p>
              </li>
              <!-- bed -->
              <li class="items-start flex gap-3">
                <span class="material-symbols-outlined"> bed </span>
                <p>find stays</p>
              </li>
            </ul>
            <!-- center / logo -->
            <div>
              <!-- <img src="" alt=""> -->
              <p>Logo</p>
            </div>
            <!-- login register hidden on smaller screens/ -->
            <div class="md:flex gap-4 hidden">
              <button class="text-white">Login</button>
              <button class="bg-white rounded-md text-black p-2">
                Sign up
              </button>
            </div>
            ${BurgerBtn()}
          </nav>`;
