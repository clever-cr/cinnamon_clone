function Communication() {
  return (
    <>
      <div className=" px-8   py-8 lg:py-32 space-y-12 max-w-7xl mx-auto">
        <div className="flex  justify-between items-center ">
          <div className="space-y-12">
            <h3 className="font-MontBold lg:text-[40px] text-[32px] text-light max-w-xl">
              They’re consistent, and the communication is good.
            </h3>
            <p className="text-base text-lighter max-w-2xl">
              When I have a deadline, they would work extra hours on the weekend
              and after hours. Cinnamon gives the impression of being a smaller
              team that’s focused on customers.
            </p>
          </div>
          <div className="w-1/5 hidden lg:block">
            <picture>
              <img className="" src="/pingLogo.webp" alt="logo" />
            </picture>
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col lg:flex-row space-x-4 ">
            <div className=" w-20">
              <picture>
                <img src="/GarinProfile.webp" alt="profile" />
              </picture>
            </div>

            <div>
              <h5 className=" text-xl lg:text-2xl font-MontBold text-light">
                Garin Toren,
              </h5>
              <p className="text-base text-light">CEO, ping</p>
            </div>
          </div>

          <div className="flex flex-col space-y-8 lg:flex-row  lg:justify-between">
            <div className="flex space-x-12">
              <picture>
                <img src="/arrow-left.webp" alt="" />
              </picture>
              <picture>
                <img src="/arrow-right.webp" alt="" />
              </picture>
            </div>
            <div className="flex items-center space-x-4">
              <picture>
                <img src="/smarrow.svg" alt="arrow" />
              </picture>
              <p className="text-primary border-b-2 border-primary">
                VIEW CASE STUDY
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Communication;
