import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Header from './Header';
import { useEffect } from 'react';
import Table from './Table';
import rules from './rules.jpg'
import map from './map.png'

function App() {

  return (
    <Container>
      <Header/>
        <img className='image' src={rules}/>
        <img className='image' src={map}/>

      <Table/>
    </Container>
  );
}

export default App;


const Container = styled.div`

`