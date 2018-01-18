import React from 'react';
import propTypes from 'prop-types';

const PageLanding = (props) => {
  const { bckImg } = props;
  return(
    <div style={ bckImg }>
      <h3>About</h3>
      <p style={{ alignContent: 'center', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         <br />Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
         <br />Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
         <br />Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </p>
    </div>
  );
};

export default PageLanding;