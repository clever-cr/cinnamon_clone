import Button from "../Button/Button";
function College() {
  return (
    <>
      <div className="relative">
        <div className="py-24 lg:py-36 max-w-7xl mx-auto px-5 ">
          <div className="grid space-y-12 lg:grid-cols-2 z-10 relative ">
            <div className="w-5/6 lg:w-1/2">
              <picture>
                <img src="/cinn-college.webp" alt="img" />
              </picture>
            </div>

            <div className="space-y-10">
              <p className="text-base text-lighter max-w-sm">
                Seize the unique opportunity to participate in a wide range of
                courses conducted by professionals with an impeccable reputation
                in the digital industry. See How It Works
              </p>
              <Button btn={"See How It Works"} />
            </div>
          </div>

          <div className="hidden w-1/3 lg:block lg:absolute lg:bottom-0 lg:right-0 lg:z-0">
            <picture>
              <img src="/cinn-college-illustration.webp" alt="img" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
export default College;
