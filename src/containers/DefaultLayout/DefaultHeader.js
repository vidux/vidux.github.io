import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    
    const { children, ...attributes } = this.props;

    return (

      <React.Fragment>

        <AppSidebarToggler  mobile />
        <AppNavbarBrand
          
          full={{ src: '/images/logo/logo.png', width: 159, height: 45, alt: ' Logo' }}
          minimized={{ src: '/images/logo/logo.png', width: 40, height: 25, alt: ' Logo' }}
        />
       
        
      
       
             
          
        
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
