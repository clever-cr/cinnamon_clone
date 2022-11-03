import Button from "../Button/Button";
function Team() {
  return (
    <>
      <div className="bg-lightgray relative ">
        <div className=" py-24 px-6  lg:py-32  max-w-7xl mx-auto">
          <div className="grid space-y-12 lg:grid-cols-2 z-10 relative  ">
            <h2 className="text-4xl  lg:text-5xl font-MontBold text-light max-w-xs lg:leading-[72px]">
              Agile team on demand
            </h2>
            <div className="lg:hidden w-4/5">
              <picture>
                <img src="/people.webp" alt="img" />
              </picture>
            </div>
            <div className="space-y-10">
              <p className="text-base text-lighter max-w-sm">
                By hiring and managing talented people with skills specific to
                your project, we build you a team that’s accomplished, agile and
                scalable in both directions.
              </p>
              <Button btn={"See How It works"} />
            </div>
          </div>

          <div className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:z-0">
            <picture>
              <img src="/people.webp" alt="img" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
export default Team;
