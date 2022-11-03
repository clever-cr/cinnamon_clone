import Office from "../Card.js/Office";
function OfficeInfo() {
  return (
    <>
      <div className="max-w-7xl mx-auto space-y-3 pt-20 px-5 lg:space-y-12 lg:py-24">
        <h2 className="text-[40px] lg:text-[54px] font-MontBold text-light">
          Our Offices
        </h2>
        <div className=" inline-flex gap-8">
          <Office
            img={"/zagreb.webp"}
            svg={"/location.svg"}
            location={"Zagreb"}
            address={"Slavonska avenija 6, 10000, Zagreb, Croatia"}
          />
          <Office
            img={"/new-york.webp"}
            svg={"/location.svg"}
            location={"Zagreb"}
            address={"Slavonska avenija 6, 10000, Zagreb, Croatia"}
          />
          <Office
            img={"/belgrade.webp"}
            svg={"/location.svg"}
            location={"Zagreb"}
            address={"Slavonska avenija 6, 10000, Zagreb, Croatia"}
          />
        </div>
        <div className="hidden lg:flex space-x-12">
          <picture>
            <img src="/arrow-left.webp" alt="" />
          </picture>
          <picture>
            <img src="/arrow-right.webp" alt="" />
          </picture>
        </div>
      </div>
    </>
  );
}
export default OfficeInfo;
