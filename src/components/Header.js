import React, { Component } from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";

import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Logo />
      </div>
    );
  }
}
