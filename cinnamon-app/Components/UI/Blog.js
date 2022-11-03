import BlogInfo from "../Card.js/blogInfo";

function Blog() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-32 space-y-12 px-5">
        <h2 className="lg:text-[54px] text-light max-w-md font-MontBold text-[40px]">
          Stay in the loop on tech topics
        </h2>
        <div className="inline-flex space-x-4">
          <BlogInfo
            img={"/freelance.webp"}
            title={"SALES"}
            name={"Matija Bermanec & Lorena jen"}
            date={"2022-10-13"}
            time={"6min"}
            description={"Differences in Hiring an Agency vs. Freelancers 2.0"}
          />
          <BlogInfo
            img={"/flutter.webp"}
            title={"Development"}
            name={"Samantha Holstead"}
            date={"2022-10-13"}
            time={"3min"}
            description={"Cinnamon Flutter Template Overview "}
          />
          <BlogInfo
            style={"hidden lg:block"}
            img={"/tinder.webp"}
            title={"Design"}
            name={"Jan Marin"}
            date={"2022-10-13"}
            time={"10min"}
            description={"How Tinder Swindled User Experience"}
          />
        </div>
        <div className="flex items-center space-x-4">
          <picture>
            <img src="/smarrow.svg" alt="arrow" />
          </picture>
          <p className="text-primary border-b-2 border-primary font-MontBold">
            VIEW MORE BLOGS
          </p>
        </div>
      </div>
    </>
  );
}
export default Blog;
