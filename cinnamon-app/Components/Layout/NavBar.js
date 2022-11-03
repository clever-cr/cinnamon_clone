import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
function NavBar() {
  const [stickyClass, setStickyClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      console.log(windowHeight);
      windowHeight > 10 ? setStickyClass(true) : setStickyClass(false);
    }
  };
  return (
    <>
      <div
        className={
          (stickyClass ? " bg-white text-black" : " bg-transparent") +
          " fixed w-full z-30"
        }
      >
        <div className="flex  max-w-7xl mx-auto   text-white justify-between px-5 items-center  lg:space-x-72 py-5 ">
          <h2
            className={`text-3xl font-MontBold ${
              stickyClass ? "text-black" : ""
            }`}
          >
            CINNAMON
          </h2>
          {/* links */}
          <div
            className={`hidden lg:flex items-center space-x-10 ${
              stickyClass ? "text-black" : ""
            }`}
          >
            {/* hyb */}
            <Link className="hover:text-primary" href="/">
              Projects
            </Link>
            <Link className="hover:text-primary" href="/">
              Services
            </Link>
            <Link className="hover:text-primary" href="/">
              About Us
            </Link>
            <Link className="hover:text-primary" href="/">
              Careers
            </Link>
            <Link className="hover:text-primary" href="/">
              Blog
            </Link>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="52"
                width="52"
                fill={stickyClass ? "#5135FF" : "white"}
              >
                <path d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
              </svg>
            </button>
            <Button btn={"Contact Us"} />
          </div>
          <div className="block lg:hidden">
            <svg
              class={`w-8 h-8 ${stickyClass ? "text-black" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
