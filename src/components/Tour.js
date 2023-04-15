import { toursData } from "./data";

const Tour = () => {
  return (
    <div className="section-center featured-center">
      {toursData.map((data) => {
        const { id, img, date, title, text, amount, days, country } = data;

        return (
          <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>{text}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>
                  {country}
                </p>
                <p>{days}</p>
                <p>{amount}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default Tour;
