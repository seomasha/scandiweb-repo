import React, {Component} from "react";

import classes from './Product.module.css';

class Product extends Component{
    render() {
        return(
            <div className={classes.all}>
                <img src={this.props.source}></img>
                <h1 className={classes.title}>{this.props.title}</h1>  
                <h1 className={classes.price}>{this.props.price}</h1>   
            </div>       
        )
    }
}

export default Product;