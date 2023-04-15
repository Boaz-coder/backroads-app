import Service from "./Service";
import Title from "./Title";
// import { services } from "./data";

const Services = () => {
  return (
    <>
      {" "}
      <section className="section services" id="services">
        <Title title="our" subTitle="services" />

        <Service />
      </section>
    </>
  );
};
export default Services;
