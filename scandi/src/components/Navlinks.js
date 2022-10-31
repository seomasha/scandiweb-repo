import React, {Component} from "react";

import classes from './Navlinks.module.css';

class Navlinks extends Component {
    render() {
        return(       
            <div className={classes.navlinks}>
                <h1 className={classes.h1}>Women</h1>
                <h1 className={classes.h1}>Kids</h1>
                <h1 className={classes.h1}>Men</h1>
            </div>
        )
    }
}

export default Navlinks;