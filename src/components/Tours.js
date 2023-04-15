import Title from "./Title";
import Tour from "./Tour";
// import { toursData } from "./data";
// import tour5Pic from "../images/tour-5.jpeg";
// import tour6Pic from "../images/tour-6.jpeg";
const Tours = () => {
  return (
    <>
      {" "}
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />

        <Tour />
      </section>
    </>
  );
};
export default Tours;
