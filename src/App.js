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
      <Regroup>PLEASE REGROUP AT 4:15PM AT ENTRANCE</Regroup>
      <img className='image' src={rules}/>
      <img className='image' src={map}/>
    
      <Table/>
    </Container>
  );
}

export default App;


const Container = styled.div`

`

const Regroup = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 40px;
font-size: 3em;
font-weight: 800;
-webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0,0,0,0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  background-color: rgb(250, 200, 0);

`