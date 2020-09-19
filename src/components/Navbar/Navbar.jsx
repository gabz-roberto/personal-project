import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import {Button} from '../Button'

import "./Navbar.css";

class Navbar extends Component {
  state = { click: false };

    handleClick = () => {
        this.setState({ click: !this.state.click })
    }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          Biluteteia<i className="fas fa-laptop-code"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.click ? 'fas fa-times' :
             'fas fa-bars'}></i>
        </div>
        <ul className={this.state.click ? 'nav-menu active' :
        'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    );
  }
}

export default Navbar;
