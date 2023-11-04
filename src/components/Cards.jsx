import data from "../../data.json";
function Cards({ setDisplay, display }) {
  return (
    <div className="main-cards">
      {data.map((index) => (
        <section className={index.title}>
          <article>
            <div className="daily">
              <div className="head">
                <h2>{index.title}</h2>
                <h2>...</h2>
              </div>
              {display === "daily" ? (
                <div className="body">
                  <h1>{index.timeframes.daily.current}hrs</h1>
                  <p>Previous - {index.timeframes.daily.previous}hrs</p>
                </div>
              ) : display === "weekly" ? (
                <div className="body">
                  <h1>{index.timeframes.weekly.current}hrs</h1>
                  <p>Previous - {index.timeframes.weekly.previous}hrs</p>
                </div>
              ) : (
                <div className="body">
                  <h1>{index.timeframes.monthly.current}hrs</h1>
                  <p>Previous - {index.timeframes.monthly.previous}hrs</p>
                </div>
              )}
            </div>
          </article>
        </section>
      ))}
    </div>
  );
}
export default Cards;
