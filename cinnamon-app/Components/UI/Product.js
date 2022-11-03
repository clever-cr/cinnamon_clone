import Project from "./Project";

function Product() {
  return (
    <>
      <div>
        <div>
          <Project
            style={"bg-lightgreen "}
            img={"/Mockup1.webp"}
            header={"PRODUCT DESIGN"}
            subheader={"QUALITY ASSURANCE"}
            title={"Corrily: Optimize prices"}
            subtitle={"to maximize revenue"}
            description={
              "Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign"
            }
          />
        </div>
        <div>
          <Project
            style={"bg-darkpurple"}
            img={"/Fiona.webp"}
            header={"PRODUCT DESIGN"}
            subheader={"WEB DEVELOPMENT"}
            title={"Fiona: Engage &"}
            subtitle={"Decide"}
            description={
              "Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
            }
          />
        </div>
        <div>
          <Project
            style={"bg-darkyellow "}
            img={"/thumbnail.webp"}
            header={"PRODUCT DESIGN"}
            subheader={"WEB DEVELOPMENT"}
            sheader={"QUALITY ASSURANCE"}
            title={"Ukulele:"}
            subtitle={"The largest ukulele tabs archive"}
            description={
              "Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website."
            }
          />
        </div>
      </div>
    </>
  );
}
export default Product;
