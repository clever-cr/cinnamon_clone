/* eslint-disable react/no-unescaped-entities */
import Button from "../Button/Button";
function Contact() {
  return (
    <>
      <div className="bg-lightgray relative">
        <div className="  max-w-7xl mx-auto lg:py-32 py-24">
          <div className="flex flex-col items-center z-10 relative space-y-12">
            <div className=" text-[40px] lg:text-[54px] font-MontBold">
              <h2 className="hidden lg:block">Have a project in mind?</h2>
              <h2 className="text-center">Let's work together.</h2>
            </div>

            <Button btn={"Contact Us"} />
          </div>
          <div className="absolute left-0 bottom-0 z-0 w-1/4 ">
            <picture>
              <img src="/job.webp" alt="img" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
