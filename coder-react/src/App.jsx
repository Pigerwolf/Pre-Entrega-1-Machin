import React from 'react';
import Header from './components/Header';
import Logo from './components/Logo';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div>
      <Header />
      <Nav-bar/>
      <Logo />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;