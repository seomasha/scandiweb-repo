import React, {Component} from "react";

import logo1 from './UI/logo/svg 2.png';
import logo2 from './UI/logo/svg 3.png';
import logo3 from './UI/logo/svg 19.png';
import logo4 from './UI/logo/svg 21.png';

import classes from './Logo.module.css';

class Logo extends Component{
    render() {
        return(
            <div>
                <img src={logo1} className={classes.logo1}></img>
                <img src={logo2} className={classes.logo2}></img>
                <img src={logo3} className={classes.logo3}></img>
                <img src={logo4} className={classes.logo4}></img>
            </div>
        )
    }
}

export default Logo;