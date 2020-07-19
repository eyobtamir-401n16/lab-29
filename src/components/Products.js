import React from 'react';
import { connect } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




function Products(props) {

    let productsHTML = [];

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === props.currentCategory)
            productsHTML.push(
                <Card>
                    <CardActionArea>
                        <img key={i} className="image" src={props.products[i].img} alt={props.products[i].name} />
                        <CardMedia style={{ height: 40 }}
                            className="media"
                            image={<img src={props.products[i]} alt="" />}
                            title={props.products[i].name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="p"></Typography>
                            <Typography variant="body2" color="textSecondary" component="p">{props.products[i].description}</Typography>
                        </CardContent>
                     </CardActionArea>
                     <CardActions>
                         <Button size="small" color="primary" onClick={(e)=> {
                             props.dipatch({
                                 type:'ADD_TO_CART',
                                 payload:props.products[i]
                             });
                         }}>Add To Cart</Button>

                         <Button size="small" color="primary" onClick={(e)=> {
                             props.dipatch({
                                 type:'VIEW_DETAIL',
                                 payload:props.products[i]
                             });
                         }}>View Detail</Button>
                     </CardActions>
                </Card>
            )
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
        products: state.products.allProducts,
        currentCategory: state.categories.currentCategory,
    };
};

export default connect(mapStateToProps)(Products);