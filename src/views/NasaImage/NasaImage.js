import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/nasa_potd/actions';

import { Button, Card } from 'antd';

import { Col, Row, } from 'reactstrap';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
 


const { getNasaAstroidJson } = actions;


class NasaImage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      nasa_data: {},
      isOpen: false
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



  componentDidMount() {
    this.props.getNasaAstroidJson();
  }




  render() {

    return (
      <div className="animated fadeIn">
        

        <Card title="Nasa Image of the day" loading={this.props.loading} style={{width:'100%',background:'gray'}}
          hoverable

          onClick={()=>this.setState({isOpen:true})}
          
          cover={<img alt="nsa_dmig" src={(this.props.nasa_iotd_data || {}).url} />}
        >
          <Card.Meta style={{color:'#fff'}} title={(this.props.nasa_iotd_data || {}).title} description={(this.props.nasa_iotd_data || {}).explanation} />
        </Card>
        
        {this.state.isOpen && (
          <Lightbox
            mainSrc={(this.props.nasa_iotd_data || {}).hdurl}
            
            onCloseRequest={() => this.setState({ isOpen: false })}
            
           
          />
        )}


      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.nasa_potd.toJS() };
}
export default connect(mapStateToProps, { getNasaAstroidJson })(NasaImage);

