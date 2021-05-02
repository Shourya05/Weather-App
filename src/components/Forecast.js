import React from "react";

import "./Forecast.scss";

class Forecast extends React.Component {
  render() {
    const items = this.props.forecast.map((f, i) => {
      const image = {
        url: `https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`,
        alt: `Image of  ${f.weather[0].description}`,
      };

      const description = f.weather[0].description;

      let d = new Date();
      let localOffset = d.getTimezoneOffset() * 60000;
      let utc = f.dt * 1000 + localOffset;
      let time = utc + 1000 * +this.props.timeZone;
      let locationDate = new Date(time);
      let hour = locationDate.getHours();

      let ampm = "AM";
      if (hour === 0) {
        hour = 12;
        ampm = "AM";
      } else if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
      } else if (hour === 12) {
        ampm = "PM";
      }

      return (
        <div key={i} className="forecast-item">
          <p className="forecast-item__time">
            {hour} {ampm}
          </p>
          <p className="forecast-item__temp">
            {f.temp} <span className="forecast-item__degree">°C</span>
          </p>
          <img className="forecast-item__img" src={image.url} alt={image.alt} />
          <p className="forecast-item__description">{description}</p>
        </div>
      );
    });

    return (
      <div className="forecast">
        <h3 className="forecast__title">Hourly Forecast</h3>
        <div className="forecast-items">{items}</div>
      </div>
    );
  }
}

export default Forecast;
