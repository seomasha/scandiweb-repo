import React, {Component, Fragment} from "react";

import CurrencyModal from "./CurrencyModal";

import classes from './CurrencyChanger.module.css';

class Currency extends Component {
    render() {
        return(
            <CurrencyModal >
                <h1 className={classes.h1}>$ USD</h1>
                <h1 className={classes.h1}>€ EUR</h1>
                <h1 className={classes.h1}>¥ JPY</h1>
            </CurrencyModal>
        )
    }
}

export default Currency;