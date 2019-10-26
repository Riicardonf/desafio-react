import React, { Component } from 'react';


import './Toolbar.css';

import Logo from '../../assets/facebook.png';
import Icon from '../../assets/account-icon.png'

class Toolbar extends Component {


  render(){
    return (
      <header>
       <nav id="navbar">
          <img id="logo" src={Logo} alt="Logo"/>
          <div id="menu">
              <span id="perfil">Meu Perfil</span>
              <img id="icon" src={Icon} alt=""/> 
          </div>
        </nav>
      </header>
    )
  }
}

export default Toolbar;