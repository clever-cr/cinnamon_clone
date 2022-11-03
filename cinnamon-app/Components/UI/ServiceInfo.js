import Service from "./Service";
import Button from "../Button/Button";

function ServiceInfo() {
  return (
    <div className="bg-[url(/noise.png)] bg-darkblack">
      <div className="grid px-5 space-y-4 lg:grid-cols-12   py-32 mt-24 max-w-7xl mx-auto">
        <h2 className="text-[54px] col-span-6 font-MontBold text-white">
          Our Services
        </h2>
        <div className="grid gap-y-10 py-4 lg:grid-cols-2 lg:col-span-6 lg:gap-x-[120px] lg:gap-y-[128px]">
          <Service
            img={"/icon1.png"}
            title={"Product design"}
            description={
              "Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes"
            }
          />
          <Service
            img={"/icon2.png"}
            title={"Development"}
            description={
              "By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
            }
          />
          <Service
            img={"/icon3.png"}
            title={"Quality assurance"}
            description={
              "Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing."
            }
          />
          <Service
            img={"/icon4.png"}
            title={"Marketing & growth"}
            description={
              "By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."
            }
          />

          <Button btn={"See Our Services"} />
        </div>
      </div>
    </div>
  );
}
export default ServiceInfo;
