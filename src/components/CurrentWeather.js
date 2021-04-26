import React, { Component } from "react";
import "./CurrentWeather.scss";
import { ReactComponent as DayClear } from "../assets/01d.svg";
import { ReactComponent as NightClear } from "../assets/01n.svg";
import { ReactComponent as PartlyClearDay } from "../assets/02d.svg";
import { ReactComponent as PartlyClearNight } from "../assets/02n.svg";
import { ReactComponent as CloudyDay } from "../assets/03d.svg";
import { ReactComponent as CloudyNight } from "../assets/03n.svg";
import { ReactComponent as OvercastDay } from "../assets/04d.svg";
import { ReactComponent as OvercastNight } from "../assets/04n.svg";
import { ReactComponent as RainDay } from "../assets/09d.svg";
import { ReactComponent as RainNight } from "../assets/09n.svg";
import { ReactComponent as DrizzleDay } from "../assets/10d.svg";
import { ReactComponent as DrizzleNight } from "../assets/10n.svg";
import { ReactComponent as Thunderstorm } from "../assets/11d.svg";
import { ReactComponent as Snow } from "../assets/13d.svg";
import { ReactComponent as Mist } from "../assets/50d.svg";

export default class CurrentWeather extends Component {
  renderImage() {
    if (this.props.icon === "01d")
      return <DayClear className="current-weather__icon" />;
    else if (this.props.icon === "01n")
      return <NightClear className="current-weather__icon" />;
    else if (this.props.icon === "02d")
      return <PartlyClearDay className="current-weather__icon" />;
    else if (this.props.icon === "02n")
      return <PartlyClearNight className="current-weather__icon" />;
    else if (this.props.icon === "03d")
      return <CloudyDay className="current-weather__icon" />;
    else if (this.props.icon === "03n")
      return <CloudyNight className="current-weather__icon" />;
    else if (this.props.icon === "04d")
      return <OvercastDay className="current-weather__icon" />;
    else if (this.props.icon === "04n")
      return <OvercastNight className="current-weather__icon" />;
    else if (this.props.icon === "09d")
      return <RainDay className="current-weather__icon" />;
    else if (this.props.icon === "09n")
      return <RainNight className="current-weather__icon" />;
    else if (this.props.icon === "10d")
      return <DrizzleDay className="current-weather__icon" />;
    else if (this.props.icon === "10n")
      return <DrizzleNight className="current-weather__icon" />;
    else if (this.props.icon === "11d" || this.props.icon === "11n")
      return <Thunderstorm className="current-weather__icon" />;
    else if (this.props.icon === "13d" || this.props.icon === "13n")
      return <Snow className="current-weather__icon" />;
    else if (this.props.icon === "50d" || this.props.icon === "50n")
      return <Mist className="current-weather__icon" />;
  }
  render() {
    console.log(this.props.icon);

    return (
      <div className="current-weather">
        <div className="current-weather__content">
          {this.renderImage()}

          <div className="current-weather__text">
            <p className="current-weather__temp">
              <b>
                {this.props.currTemperature}
                <span>°C</span>
              </b>
            </p>
            <p className="current-weather__description">
              {this.props.description}
            </p>
            <p className="current-weather__feels-like">
              Feels Like : {this.props.feelsLike} <span>°C</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
