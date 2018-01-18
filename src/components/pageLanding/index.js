import React from 'react';
import propTypes from 'prop-types';
import { Paper } from 'material-ui';

const PageLanding = (props) => {
  const { bckImg } = props;
  return(
    <Paper style={ bckImg }>
      <div style={{ height: '100%' }}>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          <br />Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          <br />Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </p>
      </div>
    </Paper>
  );
};

PageLanding.propTypes = {
  bckImg: propTypes.object,
};

export default PageLanding;