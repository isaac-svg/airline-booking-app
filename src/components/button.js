import { Dropdown, Ripple, initTWE } from "tw-elements";
initTWE({ Dropdown, Ripple });

export const BurgerBtn = () => `
<div class="relative md:hidden" data-twe-dropdown-ref >
              <button
                class="flex items-center rounded bg-[hsl(204,73%,65%)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-[hsla(219,54%,65%,1)] hover:shadow-primary-2 focus:bg-[hsl(159,44%,69%,0.5)] focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-[hsl(159,44%,69%,0.75)] active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button"
                id="dropdownMenuButton1"
                data-twe-dropdown-toggle-ref
                aria-expanded="false"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <span class="material-symbols-outlined"> menu </span>
              </button>
              <ul
                class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                aria-labelledby="dropdownMenuButton1"
                data-twe-dropdown-menu-ref
              >
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref
                    >Login</a
                  >
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref
                    >Sign up</a
                  >
                </li>
                <li>
                  <a
                    class="w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 flex gap-3 items-center"
                    href="#"
                    data-twe-dropdown-item-ref
                    ><span class="material-symbols-outlined text-[#8DD3BB]">
                      flight_takeoff
                    </span>
                    <p>find flight</p></a
                  >
                </li>
                <li>
                  <a
                    class="w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 flex gap-3 items-center"
                    href="#"
                    data-twe-dropdown-item-ref
                    ><span class="material-symbols-outlined text-[#8DD3BB]">
                      flight_takeoff
                    </span>
                    <p>find flight</p></a
                  >
                </li>
              </ul>
            </div>
`;
