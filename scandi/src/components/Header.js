import React, {Component, Fragment} from "react";

import classes from './Header.module.css';

import logo1 from './UI/logo/svg 2.png';
import logo2 from './UI/logo/svg 3.png';
import logo3 from './UI/logo/svg 19.png';
import logo4 from './UI/logo/svg 21.png';

import sc1 from './UI/logo/shoppingcart/shoppingcart.png';
import sc2 from './UI/logo/shoppingcart/Vector.png';

class Header extends Component {
    render() {
        return(
            <Fragment>
                <div>
                    <header>
                        <div className={classes.navlinks}>
                            <h1 className={classes.h1}>Women</h1>
                            <h1 className={classes.h1}>Kids</h1>
                            <h1 className={classes.h1}>Men</h1>
                        </div>
                        <div>
                            <img src={logo1} className={classes.logo1}></img>
                            <img src={logo2} className={classes.logo2}></img>
                            <img src={logo3} className={classes.logo3}></img>
                            <img src={logo4} className={classes.logo4}></img>
                        </div>
                        <div>
                            <h1 className={classes.currency}>$</h1>
                        </div>
                        <div>
                            <img src={sc1} className={classes.sc1}></img>
                            <img src={sc2} className={classes.sc2}></img>
                            <img src={sc2} className={classes.sc3}></img>
                        </div>
                    </header>
                </div>
            </Fragment>
        )
    }
}

export default Header;