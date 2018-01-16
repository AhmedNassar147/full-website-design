import React from 'react';
import PropTypes from 'prop-types';
import { AppBar } from 'material-ui';

const Header = (props) => {
    return(
      <nav>
        <AppBar
          title="Site Logo"
        >
          {props.children}
        </AppBar>
      </nav>
    );
};

export default Header;