import React, {Component} from "react";

import sc1 from './UI/logo/shoppingcart/shoppingcart.png';
import sc2 from './UI/logo/shoppingcart/Vector.png';

import classes from './Shoppingcart.module.css';

import CurrencyModal from "./CurrencyModal";

class Shoppingcart extends Component{
    render() {
        return(
            <div>
                <img src={sc1} className={classes.sc1}></img>
                <img src={sc2} className={classes.sc2}></img>
                <img src={sc2} className={classes.sc3}></img>
            </div>
        )
    }
}

export default Shoppingcart;