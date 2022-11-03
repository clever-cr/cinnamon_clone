import Link from "next/link";
import Button from "../Button/Button";
import FooterCard from "../Card.js/FooterCard";
function Footer() {
  return (
    <>
      <div className="bg-[url(/noise.png)] bg-darkblack">
        <div className=" pt-12  max-w-7xl mx-auto px-5">
          <div className="lg:grid-cols-5 grid ">
            <div className="lg:col-span-2 text-white flex flex-col justify-between ">
              <div className="space-y-8">
                <h2 className="text-3xl font-MontBold">CINNAMON</h2>
                <h2 className="text-2xl max-w-[200px] font-MontBold  lg:hidden">
                  All software, zero bullshit.
                </h2>
                <div className=" grid grid-cols-2 lg:flex lg:flex-col text-base text-secondary space-y-3">
                  <div className="flex flex-col">
                    <Link className="text-white" href="#">
                      Home
                    </Link>
                    <Link href="#">Projects</Link>
                    <Link href="#">Services</Link>
                  </div>
                  <div className="lg: flex flex-col">
                    <Link href="#">About Us</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#">Blog</Link>
                  </div>
                </div>
              </div>

              <Link className="text-sm underline  hidden lg:block" href="#">
                hello@cinnamon.agency
              </Link>
            </div>

            <div className="lg:col-span-3 text-white  flex flex-col justify-between space-y-14 lg:space-y-32">
              <div className="space-y-12">
                <h2 className="text-3xl font-MontBold hidden lg:block">
                  All software, zero bullshit.
                </h2>
                <div className="grid grid-cols-2 lg:grid lg:grid-cols-3 gap-10 lg:space-x-8">
                  <FooterCard
                    title={"Zagreb"}
                    address={"Slavonska avenija 6,"}
                    subaddress={"10000, Zagreb, Croatia"}
                    contact={"+385 99 347 3103"}
                  />
                  <FooterCard
                    title={"New York"}
                    address={"500 7th Ave, New York,"}
                    subaddress={"NY 10018, United States"}
                  />
                  <FooterCard
                    title={"Belgrade"}
                    address={"Bulevar vojvode Mišića 37"}
                    subaddress={"11000, Belgrade, Serbia"}
                  />
                </div>
              </div>

              <div className="flex lg:justify-between space-y-12 lg:flex-row flex-col">
                <div className="space-y-4 max-w-[400px] lg:max-w-[280px]  flex-1">
                  <p className="text-base font-MontBold">Our newsletter</p>
                  <div className="relative w-full ">
                    <input className="z-10 relative input bg-transparent border-b w-full  focus:border-primary outline-none" />
                    <label className="absolute  transition-all left-0 ">
                      Your Email
                    </label>
                  </div>
                  <Button style={"w-full"} btn={"subscribe"} />
                </div>
                <div className="flex items-center flex-col space-y-14 justify-center ">
                  <div className=" flex flex-col space-y-8">
                    <picture>
                      <img
                        className="w-full  lg:max-w-[200px] "
                        src="/peng.svg"
                        alt="img"
                      />
                    </picture>
                    <picture>
                      <img src="/badge.webp" alt="img" />
                    </picture>
                  </div>

                  <Link className="text-sm underline   lg:hidden" href="#">
                    hello@cinnamon.agency
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t w-full pt-6 pb-8 items-center px-4 border-opacity-20 border-t-gray-100 flex justify-between lg:py-12 mt-12 lg:flex-row flex-col-reverse ">
            <div className="text-white flex space-x-4 border-t pt-6 mt-6 border-opacity-20 border-t-gray-100 lg:border-t-0">
              <p className="text-base">© 2022 Cinnamon</p>
              <Link className="underline" href="#">
                Privacy Policy
              </Link>
            </div>
            <div className="flex  space-x-4">
              <picture>
                <img src="/linkedin.svg" alt="icon" />
              </picture>
              <picture>
                <img src="/be.svg" alt="icon" />
              </picture>
              <picture>
                <img src="/behance.svg" alt="icon" />
              </picture>
              <picture>
                <img src="/ig.svg" alt="icon" />
              </picture>
              <picture>
                <img src="/fb.svg" alt="icon" />
              </picture>
              <picture>
                <img src="/wf.svg" alt="icon" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
