import React, {Component} from "react";

import classes from './Main.module.css';
import Product from './Product.js';

import pic1 from './UI/product/Product Card/Product D.png';
import pic2 from './UI/product/Product Card/Product B.png';
import pic3 from './UI/product/Product Card/Product C.png';
import pic4 from './UI/product/Product Card/Product A.png';

import Products from "./Products";

class Main extends Component{
    render() {
        return(
            <div>
                <h1 className={classes.h1}>Category Name</h1>
                <div className={classes.products}>
                    <Product source = {pic1} title = {'Apollo Running Shirt'} price = {'$50.00'} />
                    <Product source = {pic2} title = {'Apollo Running Short'} price = {'$50.00'} />
                    <Product source = {pic3} title = {'Apollo Running Short'} price = {'$50.00'} />
                </div>
                <div className={classes.products}>
                    <Product source = {pic4} title = {'Apollo Running Short'} price = {'$50.00'} />
                    <Product source = {pic1} title = {'Apollo Running Short'} price = {'$50.00'} />
                    <Product source = {pic3} title = {'Apollo Running Short'} price = {'$50.00'} />
                </div>

            </div>
        )
    }
}

export default Main;