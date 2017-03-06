import React, { Component } from 'react';
import './App.css';
import Navbar from './top_header/navbar.js'
import Header from './header/Header.js';
import Section1 from './PremiereSection/Section1.js';

import Footer from './footer/footer.js';
import Footer2 from './Footer2/Footer2.js';
import Destinations from './destinations/Destinations.js';


// PLACER ICI VOTRE LIEN D'IMPORT


class App extends Component {
  render() {
    console.log('start app');
    return (
      <div className="App">

<Navbar/>
<Header/>
<Section1/>

<Destinations/>
<Footer/>
<Footer2/>

      {/*PLACER LES COMPONENTS <> ICI POUR VOTRE PREVIEW PERSO
      ATTENTION !!!! SUPPRIMER BIEN VOS COMPONENTS AVANT DE PUSHER !
      BISOUS D'AMOUR
      */}


      </div>
    );
  }
}

export default App;
