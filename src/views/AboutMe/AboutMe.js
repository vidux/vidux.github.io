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
import './AboutMe.css';



// Main Chart

//Random Numbers





class AboutMe extends Component {
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
            <Card className="abtme_content_cards" >
              <p className="abntme_about_text">About Me</p>
            </Card>
          </Col>

        </Row>
        <Row>

          <Col className="abtme_main_content_text">
            <Jumbotron className="abt_content_jmbotron">

              <code>Im a Developer / Programmer who like do explorer new things.</code>
              <p><code><span aria-label="love" role="img">❤️ </span> <span aria-label="tea emoji" role="img">☕️</span>(it's tea not coffee)<span aria-label="lk" role="img">🇱🇰 </span></code></p>

            </Jumbotron>
            <Jumbotron style={{ backgroundColor: '#585f66' }}>
              <p>Currently i'm mostly Doing develment with,</p>
              <p><img src="/images/logo/react.svg" alt='react' style={{ height: '30px' }}></img>React, <img src="/images/logo/node.png" alt='node' style={{ height: '30px' }}></img>Node.js, <img src="/images/logo/php.svg" alt='php' style={{ height: '30px' }}></img>PHP and <img src="/images/logo/laravel.png" alt='laravel' style={{ height: '30px' }}></img>Laravel </p>
            </Jumbotron>

            <Jumbotron style={{ backgroundColor: '#585f66',textAlign:"left" }}>

              <p>Also I have experiences in,</p>

              <ol style={{listStyleType:'disc'}}>
                <li>Android mobile application Development</li>
                <li>Rest API</li>
                <li>Firebase</li>
              </ol>
            </Jumbotron>
          </Col>

        </Row>





      </div>
    );
  }
}

export default AboutMe;
