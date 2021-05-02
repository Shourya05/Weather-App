import React, { Component } from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { getCurrentWeather, getForecast } from "./apis/OpenWeather";
import Header from "./components/Header";

export default class App extends Component {
  state = {
    location: "",
    city: "",
    country: "",
    temp: "",
    feelsLike: "",
    description: "",
    icon: "",
    timezone: "",
    hourlyForecast: [],
  };

  onInputChange = (e) => {
    this.setState({ location: e.target.value });
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    const weatherRes = await getCurrentWeather(this.state.location);
    const lat = weatherRes.data.coord.lat;
    const lon = weatherRes.data.coord.lon;
    const forecastRes = await getForecast(lat, lon);

    this.setState({
      temp: weatherRes.data.main.temp,
      feelsLike: weatherRes.data.main.feels_like,
      description: weatherRes.data.weather[0].main,
      icon: weatherRes.data.weather[0].icon,
      country: weatherRes.data.sys.country,
      timezone: weatherRes.data.timezone,
      hourlyForecast: forecastRes.data.hourly,
      city: this.state.location,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-searchbar">
            <SearchBar
              location={this.state.city}
              temp={this.state.temp}
              inputChange={this.onInputChange}
              formSubmit={this.onFormSubmit}
            />
            <Header />
          </div>
          {this.state.temp ? (
            <CurrentWeather
              location={this.state.city}
              country={this.state.country}
              currTemperature={this.state.temp}
              feelsLike={this.state.feelsLike}
              description={this.state.description}
              icon={this.state.icon}
            />
          ) : (
            ""
          )}

          {this.state.temp ? (
            <Forecast
              forecast={this.state.hourlyForecast}
              timeZone={this.state.timezone}
            />
          ) : (
            ""
          )}
        </header>
      </div>
    );
  }
}
