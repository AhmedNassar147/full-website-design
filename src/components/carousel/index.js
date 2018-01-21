import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import { Slide, Slider } from 'react-materialize';

const Carousel = (props) => {
  const { SliderImages } = props;
  return(
    <Paper style={{ margin: '2px 0' }}>
      <Slider>
        { SliderImages.map((slide) => (
          <Slide
            key={slide.id}
            src={slide.imgUrl}
            title={slide.legend}
          >
        </Slide>
        ))}
      </Slider>
    </Paper>
  );
};

export default Carousel;