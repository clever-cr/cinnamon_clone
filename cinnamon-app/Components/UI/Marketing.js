import Button from "../Button/Button";

function Marketing() {
  return (
    <>
      <div className="bg-lightgray ">
        <div className="lg:py-32 px-8 lg:px-0 space-y-8 py-14 ">
          <div className="flex flex-col space-y-8  lg:flex-row items-center">
            <div className="space-y-4 lg:space-y-12 max-w-6xl mx-auto">
              <h2 className=" text-[40px] lg:text-[54px] font-MontBold text-light">
                Who we are
              </h2>
              <p className="text-base text-lighter max-w-md">
                Meet our international teams made up of 86 innovators, branched
                into 8 departments, that influence the market throughout 20
                different countries.
              </p>
              <div className=" hidden lg:grid grid-cols-2 text-xl text-light font-MontBold gap-6">
                <h1>Product design</h1>
                <h1>Project management</h1>
                <h1>Web development</h1>
                <h1>Human resources</h1>
                <h1>Mobile development</h1>
                <h1>Sales</h1>
                <h1>Quality assurance</h1>
                <h1>Fluffy friends</h1>
                <h1>Marketing</h1>
              </div>
            </div>

            <div className="">
              <picture>
                <img src="/wwr.webp" alt="who we are" />
              </picture>
            </div>
          </div>
          <div className="lg:px-36 max-w-7xl mx-auto">
            <Button btn={"Read About Us"} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Marketing;
