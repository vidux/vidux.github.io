import React, { Component, lazy, Suspense } from 'react';
import { Card, Button } from 'antd';


import {
  Badge,
  Jumbotron,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,

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
import './Dashboard.css';



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

          <Col className="main_content_text">
            <Jumbotron className="db_content_jmbotron">
              <h1 className="db_center_title_text">HI :) Welcome To Vidux's Crash Zone</h1>

              <hr className="my-2" />
              <p>Hope You find an interesting thing from here.<span aria-label="teasing emoji" role="img">😁</span> </p>
              <p className="lead">
              </p>
            </Jumbotron>
          </Col>

        </Row>
        <Row>

          <Col>
            
              <Card className="db_content_cards" hoverable onClick={e=> this.props.history.push('/aboutme')}>
                <p className="db_about_text">About Me</p>
              </Card>
            
          </Col>

        </Row>



      </div>
    );
  }
}

export default Dashboard;
