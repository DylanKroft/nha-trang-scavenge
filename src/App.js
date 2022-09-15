import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Header from './Header';
import { useEffect } from 'react';
import Table from './Table';

function App() {

  return (
    <Container>
      <Header/>
      <Table/>
    </Container>
  );
}

export default App;


const Container = styled.div`

`