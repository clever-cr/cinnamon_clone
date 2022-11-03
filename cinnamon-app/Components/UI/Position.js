import Button from "../Button/Button";
import PositionInfo from "../Card.js/PositionInfo";

function Position() {
  return (
    <>
      <div className="bg-darkblack bg-[url(/noise.png)] lg:py-44 py-24">
        <div className="text-white max-w-7xl mx-auto grid lg:grid-cols-2 px-5 space-y-14">
          <div className="space-y-6 lg:space-y-10">
            <h2 className="text-[40px] lg:text-[54px] font-MontBold">
              We’re growing
            </h2>
            <p className="text-base text-secondary max-w-md">
              Jump on board with Cinnamon and get the privilege of working on
              challenging projects for leading global companies! Make the world
              a better, more connected place.
            </p>
            <Button btn={"See All Positions"} />
          </div>
          <div>
            <PositionInfo
              status={"Android Developer"}
              arrow={"/arrowRightWhite.png"}
            />
            <PositionInfo
              status={"Android Developer"}
              arrow={"/arrowRightWhite.png"}
            />
            <PositionInfo
              status={"Backend Development Team Lead"}
              arrow={"/arrowRightWhite.png"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Position;
