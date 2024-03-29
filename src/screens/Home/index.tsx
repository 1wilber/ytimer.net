import Logo from "@/assets/ytimer-logo.png";
import { useRef } from "react";
import { ShowScramble } from "@/modules/scramble/show";
import { CreateTime } from "@/modules/times/create";
import { ScrambledPuzzle } from "@/modules/scramble/scrambled-puzzle";
import { Drawer } from "@/components/Home/Drawer";
import { Analytics } from "@vercel/analytics/react";

function Home() {
  const ref = useRef(null);

  return (
    <div className="drawer lg:drawer-open h-full">
      <Analytics />
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-100 lg:hidden">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 lg:hidden">
            <img src={Logo} alt="logo" className="h-10" />
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal"></ul>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full px-3 py-3">
          <ShowScramble />

          <div className="flex justify-center items-center flex-[2]" ref={ref}>
            <CreateTime container={ref} />
          </div>

          <ScrambledPuzzle />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="p-4 w-64 min-h-full bg-base-200">
          <Drawer />
        </ul>
      </div>
    </div>
  );
}

export default Home;
