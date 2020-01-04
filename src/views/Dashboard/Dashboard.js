import React, { Component, lazy, Suspense } from 'react';
import { Button } from 'antd';

import {
  Badge,

  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import Particles from 'react-particles-js';




// Main Chart

//Random Numbers





class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  



  render() {

    return (
      <div className="animated fadeIn">
			<Row>
			
			<Col>
			<Button>
			<Card>welcome to crash zone</Card>
			</Button>
			</Col>
			
				<Col>
			<Button>
			<Card>welcome to crash zone</Card>
			</Button>
			</Col>
			
			
					<Col>
			<Button>
			<Card>welcome to crash zone</Card>
			</Button>
			</Col>
			
			</Row>

  
      
      </div>
    );
  }
}

export default Dashboard;
