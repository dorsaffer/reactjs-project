import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './components/shared/dishes'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

 class App extends Component {
  constructor(props){
    super(props)
    this.state={
      dishes:DISHES,

    }


  }


  render(){
  return (
    <div className="App">
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
    <Menu dishes={this.state.dishes}></Menu>
  </div>

  );
}
}

export default App;
