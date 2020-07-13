import React from 'react';
import { connect } from 'react-redux';

function Products(props) {

    let productsHTML = [];

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === props.currentCategory)
            productsHTML.push(<h3 key={i}>{props.products[i].name}</h3>);
    }

    return (
        <>
            <h2>Products</h2>
            {productsHTML}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentCategory: state.currentCategory,
    };
};

export default connect(mapStateToProps)(Products);