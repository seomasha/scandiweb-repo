import React, {Component, Fragment} from "react";

import CurrencyChanger from "./CurrencyChanger";

import classes from './Currency.module.css';

class Currency extends Component {
    render() {
        return(
            <Fragment>
                <div>
                    <h1 className={classes.currency}>$</h1>
                    <h1 className={classes.arrow}>v</h1>
                </div>
                <div>
                    <CurrencyChanger />
                </div>
            </Fragment>
        )
    }
}

export default Currency;