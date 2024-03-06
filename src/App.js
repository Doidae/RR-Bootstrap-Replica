import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import StoreListings from './components/StoreListing';
import Background from './components/Background';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
