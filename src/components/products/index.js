import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Card, CardHeader, CardMedia, CardText, CardTitle, CardActions, FlatButton } from 'material-ui';
const prodUrls = {
  pro1_Url: 'https://wallpaperscraft.com/image/scarlett_johansson_face_lipstick_makeup_bright_hair_64204_3840x2160.jpg',
  pro2_Url: 'https://wallpaperscraft.com/image/scarlett_johansson_face_lipstick_makeup_bright_hair_64204_3840x2160.jpg',
  pro3_Url: 'https://wallpaperscraft.com/image/scarlett_johansson_face_lipstick_makeup_bright_hair_64204_3840x2160.jpg',
  pro4_Url: 'https://wallpaperscraft.com/image/scarlett_johansson_face_lipstick_makeup_bright_hair_64204_3840x2160.jpg',
}

const Products = (props) => {
  return(
    <div style={prodContainerStyle}>
       <div style={productStyle}>
        <Card>
          <CardHeader
            title="First product"
            subtitle="Subtitle of this Product"
          />
          <CardMedia>
            <img 
              src={prodUrls.pro1_Url}
              alt="prod-image"
            />
          </CardMedia>
          <CardTitle title="Informations" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton
              label="buy this Product"
              primary 
            />
          </CardActions>
        </Card>
       </div>

       <div style={productStyle}>
        <Card>
          <CardHeader
            title="Second product"
            subtitle="Subtitle of this Product"
          />
          <CardMedia>
            <img 
              src={prodUrls.pro2_Url}
              alt="prod-image"
            />
          </CardMedia>
          <CardTitle title="informations" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Buy this Product" primary />
          </CardActions>
        </Card>
       </div>

       <div style={productStyle}>
        <Card>
          <CardHeader
            title="Third product"
            subtitle="Subtitle of this product"
          />
          <CardMedia>
            <img 
              src={prodUrls.pro3_Url}
              alt="prod-image"
            />
          </CardMedia>
          <CardTitle title="Informations" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton 
              label="buy this product"
              primary  
            />
          </CardActions>
        </Card>
       </div>

       <div style={lastProductStyle}>
        <Card>
          <CardHeader
            title="Forth product"
            subtitle="Subtitle of this Product"
          />
          <CardMedia>
            <img 
              src={prodUrls.pro4_Url}
              alt="prod-image"
            />
          </CardMedia>
          <CardTitle title="Informations" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="buy this Product" primary />
          </CardActions>
        </Card>
       </div>
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


const lastProductStyle = {
  flexShrink: 1,
  flex: 1,
  maxWidth: '600px',
};

export default Products;