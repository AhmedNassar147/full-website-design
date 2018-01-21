import React from 'react';
import PropTypes from 'prop-types';
import { 
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
  CardActions,
  FlatButton,
  Snackbar,
} from 'material-ui';

const Products = (props) => {
  const { products, open, handleRequestOpen, handleRequestClose, productStyles } = props;
  if (!products) return console.log('products no props');
  console.log(open);
  return(
    <div style={productStyles.prodContainerStyle}>
      {products.map((product) => (
        <div style={productStyles.prodStyle} key={product.id}>
          <Card>
            <CardHeader
              title={product.Prodheader}
              subtitle={product.subtitle}
            />
            <CardMedia>
              <img 
                src={product.ProdUrl}
                alt="prod-image"
              />
            </CardMedia>
            <CardTitle title={product.cardTitle} />
            <CardText>
              {product.cardText}
            </CardText>
            <CardActions>
              <FlatButton
                label="buy this Product"
                primary
                onClick={handleRequestOpen}
              />
            </CardActions>
          </Card>
       </div>
      ))}
      <div>
        <Snackbar
          open={open}
          message="added to your card"
          autoHideDuration={3000}
          onRequestClose={handleRequestClose}
        />
      </div>
    </div>
  );
};

Products.propTypes = {
  open: PropTypes.bool,
  handleRequestOpen: PropTypes.func.isRequired,
  handleRequestClose: PropTypes.func.isRequired,
  productStyles: PropTypes.object,
}

export default Products;
