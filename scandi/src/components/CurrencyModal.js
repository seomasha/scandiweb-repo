import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";

import classes from './CurrencyModal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.text}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');

class CurrencyModal extends Component{
    render() {
        return(
            <Fragment>
                {/*{ReactDOM.createPortal(<Backdrop />, portalElement)} za cart*/}
                {ReactDOM.createPortal(<ModalOverlay>{this.props.children}</ModalOverlay>, portalElement)}
            </Fragment>
        )
    }
}

export default CurrencyModal;