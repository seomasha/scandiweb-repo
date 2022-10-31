import React, {Component, Fragment} from "react";

import Logo from './Logo.js';
import Currency from "./Currency.js";
import Navlinks from "./Navlinks.js";
import Shoppingcart from "./Shoppingcart.js";

import classes from './Header.module.css';

class Header extends Component {
    render() {
        return(
            <header>
                <Navlinks />
                <Logo />
                <Currency />
                <Shoppingcart />
            </header>
        )
    }
}

export default Header;