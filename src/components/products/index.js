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
  FlatButton
} from 'material-ui';

const Products = (props) => {
  const { products } = props;
  if (!products) return console.log('products no props');
  return(
    <div style={prodContainerStyle}>
      {products.map((product) => (
        <div style={productStyle} key={product.id}>
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
              />
            </CardActions>
          </Card>
       </div>
      ))}
    </div>
  );
};
const prodContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
};

const productStyle = {
  flexShrink: 1,
  flex: 1,
  maxWidth: '600px',
  marginRight: '5px',
};

export default Products;
