import Link from "next/link";

function Project({
  img,
  header,
  subheader,
  sheader,
  title,
  subtitle,
  description,
  style,
}) {
  return (
    <>
      <div className={`px-5 pt-24 space-y-8  lg:pt-36  max-w-7xl mx-auto `}>
        <div className={`${style} overflow-hidden `}>
          <picture>
            <img
              src={img}
              alt=""
              className={
                "transition-all duration-700 ease-in-out hover:scale-[1.09] "
              }
            />
          </picture>
        </div>
        <div className="flex  space-x-8">
          <p className="text-normal text-xs font-MontBold">{header}</p>
          <p className="text-normal text-xs font-MontBold">{subheader}</p>
          <p className="text-normal text-xs font-MontBold ">{sheader}</p>
        </div>
        <div>
          <Link href="/">
            <h2 className=" text-[32px] lg:text-5xl text-light font-MontBold leading-[56px]">
              {title} <br></br> {subtitle}
            </h2>
          </Link>
        </div>

        <p className="text-lighter text-lg max-w-2xl ">{description}</p>
      </div>
    </>
  );
}
export default Project;
